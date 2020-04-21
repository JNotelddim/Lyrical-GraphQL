import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import songsQuery from "../queries/fetchSongs";
import mutation from "../queries/deleteSong";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({
        variables: { id },
      })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    const songList = this.props.data.songs.map(({ id, title }) => (
      <Link to={`/songs/${id}`}>
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      </Link>
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
