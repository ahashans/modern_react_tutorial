import {combineReducers} from 'redux'

const songsReducer = () => {
  return [
    { title: "In the end", duration: "3:39" },
    { title: "Photograph", duration: "4:35" },
    { title: "They ran", duration: "3.22" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
      return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    'songs':songsReducer,
    'selectedSong':selectSongReducer
});