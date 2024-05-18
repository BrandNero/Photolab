import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from "hooks/UseModal"

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();
    return (
      <div className="App">
        <HomeRoute photos={photos} topics={topics} openModal={openModal} />
        <PhotoDetailsModal isModalOpen={isModalOpen} onClose={closeModal} photo={selectedPhoto} />
      </div>
    );
};

export default App;
