import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { isModalOpen, onClose, photo, toggleFavourites, favourites, openModal } = props;
  if (!isModalOpen || !photo) {
    return null;
  }

  const isFavourite = favourites.includes(photo.id);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={photo.id}
          favourites={isFavourite}
          toggleFavourites={toggleFavourites}
        />
        <img src={photo.urls.full} alt={photo.title} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt={`${photo.user.username}'s profile`}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.username}</p>
            <p className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </p>
          </div>
        </div>
      </div>
      <h2 className="photo-details-modal__header">Similar Photos</h2>
      <div className="photo-details-modal__similar-photos">
      <PhotoList
        photos={photo.similar_photos ? Object.values(photo.similar_photos) : []}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
      />
      </div>
    </div>
  );
};


export default PhotoDetailsModal;
