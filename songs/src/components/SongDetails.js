import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (song === null) {
    return <h1 className="header">Details for:</h1>;
  }
  return (
    <div>
      <h1 className="header">Details for:</h1>
      <div className="info" style={{ marginLeft: "2rem" }}>
        <h3 className="">Title: {song.title}</h3>
        <h3 className="">Length: {song.duration}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {song:state.selectedSong};
};

export default connect(mapStateToProps)(SongDetails);
