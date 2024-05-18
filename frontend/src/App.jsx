import {React, useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from "hooks/UseModal"

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
  const toggleFavourites = (photoId) => {
    setFavourites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();
    return (
      <div className="App">
        <HomeRoute
          photos={photos}
          topics={topics}
          openModal={openModal}
          toggleFavourites={toggleFavourites}
          favourites={favourites}/>
        <PhotoDetailsModal
          isModalOpen={isModalOpen}
          onClose={closeModal}
          photo={selectedPhoto}
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          openModal={openModal}
          />
      </div>
    );
};

export default App;
