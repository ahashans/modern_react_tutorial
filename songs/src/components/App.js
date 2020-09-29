import React from "react";
import "./App.css";
import SongDetails from "./SongDetails";
import SongList from "./SongList";

function App() {  
  return (
    <div className="ui container grid" style={{marginTop:"3rem"}}>
      <div className="row">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
