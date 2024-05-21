import {React, useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const { photos, topics, openModal, toggleFavourites, favourites, fetchPhotosByTopic} = props;

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics} 
        favourites={favourites}
        fetchPhotosByTopic={fetchPhotosByTopic} 
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
