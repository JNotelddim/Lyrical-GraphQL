import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import songQuery from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading</div>;

    const { id, title, lyrics } = this.props.data.song;
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default graphql(songQuery, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
