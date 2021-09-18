import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import FrontPage from "./Components/FrontPage";
import MoodPage from "./Components/MoodPage";
/*
  Song component -> possible spotify embed for fixed playlists
  Playlist -> Takes in mood and returns associated playlist
  Theme -> Takes in mood and outputs animated gradient
*/

function App() {
	const [Mood, setMood] = useState(null);
	const [receivedMood, setReceivedMood] = useState(false);

	useEffect(() => {}, [Mood]);

	//Once a mood is received, we will return the playlist
	return receivedMood ? <MoodPage MountState={receivedMood} /> : <FrontPage />;
}

export default App;
