import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const {topic, onClickTopic} = props

  const handleClick = () => {
    onClickTopic(topic);
  };
  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
