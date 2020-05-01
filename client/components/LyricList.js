import React from "react";
import { graphql } from "react-apollo";

import likeLyricMutation from "../queries/likeLyric";

const LyricList = ({ lyrics, mutate }) => {
  const handleLike = (id) => {
    mutate({
      variables: { id },
    });
  };

  return (
    <ul className="collection">
      {lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <div className="collection-item">
            <span className="margin-m">{likes}</span>
            <i className="material-icons" onClick={() => handleLike(id)}>
              thumb_up
            </i>
          </div>
        </li>
      ))}
    </ul>
  );
};

// lyric id5eab4b10d46b2207449ce987

export default graphql(likeLyricMutation)(LyricList);
