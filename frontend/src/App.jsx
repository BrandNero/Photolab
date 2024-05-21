import {React, useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {isModalOpen,
         selectedPhoto,
         openModal,
         closeModal,
         favourites,
         toggleFavourites,
         photoData,
         topicData,
         fetchPhotosByTopic,
        } = useApplicationData();
    return (
      <div className="App">
        <HomeRoute
          photos={photoData}
          topics={topicData}
          openModal={openModal}
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          fetchPhotosByTopic={fetchPhotosByTopic}
          />
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
