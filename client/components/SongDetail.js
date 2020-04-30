import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

import songQuery from "../queries/fetchSong";
import LyricList from "./LyricList";
import LyricCreate from "./LyricCreate";

const SongDetail = ({ data: { loading, song } }) => {
  if (loading) return <div>Loading...</div>;

  const { id, title, lyrics } = song;

  console.log(song);
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{title}</h3>
      <LyricList lyrics={lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
};

// class SongDetail extends Component {
//   render() {
//     if (this.props.data.loading) return <div>Loading</div>;

//     const { id, title, lyrics } = this.props.data.song;
//     return (
//       <div>
//         <Link to="/">Back</Link>
//         <h3>{title}</h3>
//         <LyricList lyrics={lyrics} />
//         <LyricCreate songId={id} />
//       </div>
//     );
//   }
// }

export default graphql(songQuery, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
