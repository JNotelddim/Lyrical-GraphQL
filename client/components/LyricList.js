import React from "react";

const LyricList = ({ lyrics }) => {
  console.log(lyrics);
  return (
    <ul className="collection">
      {lyrics.map(({ id, content }) => (
        <li key={id} className="collection-item">
          {content}
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
