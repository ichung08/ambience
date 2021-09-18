import React, { useState } from "react";

import { useTransition, animated } from "react-spring";

import MoodPage from "./Components/MoodPage";
import FrontPage from "./Components/FrontPage";
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

  return Mood ? (
    <MoodPage mood={Mood} moodHandler={moodHandler} />
  ) : (
    <FrontPage mood={Mood} moodHandler={moodHandler} />
  );
}

export default App;
