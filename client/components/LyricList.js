import React from "react";
import { graphql } from "react-apollo";

import likeLyricMutation from "../queries/likeLyric";

const LyricList = ({ lyrics, mutate }) => {
  const handleLike = (id, likes) => {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          __typename: "LyricType",
          id: id,
          likes: likes + 1,
        },
      },
    });
  };

  return (
    <ul className="collection">
      {lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <div className="collection-item">
            <span className="margin-m">{likes}</span>
            <i className="material-icons" onClick={() => handleLike(id, likes)}>
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
