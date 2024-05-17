import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favPhotos }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!favPhotos} selected={favPhotos} />
    </div>
  ) 
};

export default FavBadge;