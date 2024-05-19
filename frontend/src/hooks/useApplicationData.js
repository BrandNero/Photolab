import {React, useState} from "react";
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useModal from "./UseModal"

const useApplicationData = () => {
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();
  const [favourites, setFavourites] = useState([]);

  const toggleFavourites = (photoId) => {
    setFavourites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };

  return {
    photos,
    topics,
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
    favourites,
    toggleFavourites,
  };
};
export default useApplicationData