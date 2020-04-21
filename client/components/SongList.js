import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    const songList = this.props.data.songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
    return <ul className="collection">{songList}</ul>;
  }

  render() {
    return !this.props.data.loading ? this.renderSongs() : <div>Loading</div>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
