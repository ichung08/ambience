import React, { useState } from "react";

import MoodPage from "./Components/MoodPage";
import FrontPage from "./Components/FrontPage";

import Video from "./Components/Video";
import Playlist from "./Components/Playlist";
import Video from "./Components/Video";
/*
  Song component -> possible spotify embed for fixed playlists
  Playlist -> Takes in mood and returns associated playlist
  Theme -> Takes in mood and outputs animated gradient
*/

function App() {
	const [Mood, setMood] = useState(null);
	const [receivedMood, setReceivedMood] = useState(true);

	return receivedMood ? <MoodPage Mood={Mood} /> : <FrontPage />;
}

export default App;
