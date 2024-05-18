import {React, useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const { photos, topics, openModal} = props;
  const [favourites, setFavourites] = useState([]);
  const toggleFavourites = (photoId) => {
    setFavourites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourites={toggleFavourites} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;
