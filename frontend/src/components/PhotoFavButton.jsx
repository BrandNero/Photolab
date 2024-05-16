import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const[favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(prevFavourite => !prevFavourite)
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={favourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;