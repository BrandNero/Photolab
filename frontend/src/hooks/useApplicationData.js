import {useReducer} from "react";
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { ActionTypes } from "actions";

const initialState = {
  photos,
  topics,
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_FAVOURITE:
      const photoExists = state.photos.some(photo => photo.id === action.photoId);
      if (!photoExists) {
        return { ...state, error: 'Invalid photoId. Please try again.' };
      }
      const favourites = state.favourites.includes(action.photoId)
        ? state.favourites.filter(id => id !== action.photoId)
        : [...state.favourites, action.photoId];
      return { ...state, favourites, error: null };

    case ActionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.photo };

    case ActionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null };

    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    openModal,
    closeModal,
    toggleFavourites,
    ...state
  };
}
export default useApplicationData