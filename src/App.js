import React, { useState } from "react";

import MoodPage from "./Components/MoodPage";
import FrontPage from "./Components/FrontPage";

import Video from "./Components/Video";
import Playlist from "./Components/Playlist";
/*
  Song component -> possible spotify embed for fixed playlists
  Playlist -> Takes in mood and returns associated playlist
  Theme -> Takes in mood and outputs animated gradient
*/

function App() {
	const [Mood, setMood] = useState(null);

  const moodHandler = (mood) => {
    setMood(mood);
  }

	return Mood ? <MoodPage mood={Mood} moodHandler={moodHandler} /> : <FrontPage mood={Mood} moodHandler={moodHandler}/>;
}

export default App;
