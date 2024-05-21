import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
const TopNavigation = (props) => {
  const {topics, favourites,  fetchPhotosByTopic} = props;
  const favPhotos = favourites.length > 0;

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onClickTopic={handleTopicClick}/>
      <FavBadge favPhotos={favPhotos}/>
    </div>
  );
};


export default TopNavigation;