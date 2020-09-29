import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
const SongList = ({ songs, selectSong }) => {
  const onSelect = (song) => {
    selectSong(song);
  };
  const listItems = songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <div className="ui button" onClick={() => onSelect(song)}>
            Select
          </div>
        </div>
        <div className="content">
          <h3 className="header">{song.title}</h3>
        </div>
      </div>
    );
  });
  return <div className="ui middle aligned divided list">{listItems}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
