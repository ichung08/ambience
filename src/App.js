import React, { useState } from "react";
import Video from "./Components/Video";
import Playlist from "./Components/Playlist";
/*
  Song component -> possible spotify embed for fixed playlists
  Playlist -> Takes in mood and returns associated playlist
  Theme -> Takes in mood and outputs animated gradient
*/

function App() {
  const [Init, setInit] = useState(false);
  const [Mood, setMood] = useState("neutral");

  return (
    <div>
      <header>
        <h1 className="header">Ambience</h1>
      </header>
      <Video />
      <Playlist Mood={Mood} setMood={setMood} />
    </div>
  );
}

export default App;
