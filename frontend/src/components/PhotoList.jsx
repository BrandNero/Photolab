import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, favourites, toggleFavourites, openModal} = props;

  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map(photo => {
        console.log(photo); // Log a photo
        return (
          <PhotoListItem 
            key={photo.id} 
            photo={photo} 
            favourites={favourites.includes(photo.id)}
            toggleFavourites={toggleFavourites}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
}

export default PhotoList;
