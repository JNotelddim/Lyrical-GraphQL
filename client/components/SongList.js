import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import songsQuery from "../queries/fetchSongs";
import mutation from "../queries/deleteSong";

class SongList extends Component {
  onSongDelete(event) {
    this.props.mutate({
      variables: { id },
      refetchQueries: [{ query: songsQuery }],
    });
  }

  renderSongs() {
    const songList = this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i
          className="material-icons right"
          onClick={this.onSongDelete.bind(this)}
        >
          delete
        </i>
      </li>
    ));
    return <ul className="collection">{songList}</ul>;
  }

  render() {
    return (
      <div>
        {!this.props.data.loading ? this.renderSongs() : <div>Loading</div>}

        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(mutation)(graphql(songsQuery)(SongList));
