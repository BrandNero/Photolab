import { useReducer, useEffect } from "react";
import { ActionTypes } from "actions";

const initialState = {
  photoData: [],
  topicData: [],
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_PHOTOS:
      return { ...state, photoData: action.photos };

    case ActionTypes.SET_TOPICS:
      return { ...state, topicData: action.topics };

    case ActionTypes.SET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: { ...state.photoData, [action.topic]: action.photos },
      };

    case ActionTypes.SET_ERROR:
      return { ...state, error: action.error };

    case ActionTypes.TOGGLE_FAVOURITE:
      const photoExists = state.photoData.some(
        (photo) => photo.id === action.photoId
      );
      if (!photoExists) {
        return {
          ...state,
          error: "Invalid photoId. Please try again.",
        };
      }
      const favourites = state.favourites.includes(action.photoId)
        ? state.favourites.filter((id) => id !== action.photoId)
        : [...state.favourites, action.photoId];
      return { ...state, favourites, error: null };

    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.photo,
      };

    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };

    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionTypes.SET_PHOTOS, photos: data });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.SET_ERROR,
          error: "Failed to fetch photos",
        });
      });

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionTypes.SET_TOPICS, topics: data });
      })
      .catch((error) => {
        console.error("Failed to fetch topics:", error); // Log the error
        dispatch({
          type: ActionTypes.SET_ERROR,
          error: "Failed to fetch topics",
        });
      });
  }, []);

  useEffect(() => {
    if (state.topic) {
      fetch(`/api/photos?topic=${state.topic}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: ActionTypes.SET_PHOTOS_BY_TOPIC,
            topic: state.topic,
            photos: data,
          });
        })
        .catch((error) => {
          console.error(
            `Failed to fetch photos for topic ${state.topic}:`,
            error
          );
          dispatch({
            type: ActionTypes.SET_ERROR,
            error: `Failed to fetch photos for topic ${state.topic}`,
          });
        });
    }
  }, [state.topic]);

  const toggleFavourites = (photoId) => {
    dispatch({ type: ActionTypes.TOGGLE_FAVOURITE, photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: ActionTypes.OPEN_MODAL, photo });
  };

  const closeModal = () => {
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };
  return {
    ...state,
    openModal,
    closeModal,
    toggleFavourites,
  };
};

export default useApplicationData;