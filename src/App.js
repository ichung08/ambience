import React, { useState } from "react";

import MoodPage from "./Components/MoodPage";
import FrontPage from "./Components/FrontPage";

import Header from "./Components/Header";
/*
  Song component -> possible spotify embed for fixed playlists
  Playlist -> Takes in mood and returns associated playlist
  Theme -> Takes in mood and outputs animated gradient
*/

function App() {
  const [Mood, setMood] = useState(null);

  const moodHandler = (mood) => {
    setMood(mood);
  };

  const setPage = () => {
    return Mood === null ? <FrontPage moodHandler={moodHandler} /> : <MoodPage mood={Mood} moodHandler={moodHandler} />;
  };

  return (
    <div>
      <div className="main-container">
        <Header moodHandler={setMood} />
        {setPage()}
      </div>
    </div>
  );
}

export default App;
