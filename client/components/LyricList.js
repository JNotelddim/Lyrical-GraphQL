import React, { Component } from "react";

class LyricList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lyrics: props.lyrics,
    };
  }

  render() {
    return (
      <ul className="collection">
        {this.state.lyrics.map(({ id, content }) => (
          <li key={id} className="collection-item">
            {content}
          </li>
        ))}
      </ul>
    );
  }
}

export default LyricList;
