import { useState } from "react";
import "./styles/app.css";
// importing components
import Player from "./components/Player";
import Song from "./components/Song";
// importing util
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
