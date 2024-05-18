import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoId, favourites, toggleFavourites } = props

  const handleClick = () => {
    toggleFavourites(photoId)
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={favourites}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;