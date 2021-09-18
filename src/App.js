import React, { useState, useEffect } from "react";

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
	const [transition, setTransition] = useState(true);

	//const animation = () => {};

	useEffect(() => {
		if (Mood != null) {
			setTransition(true);
		}

		//Play transition
	}, [Mood]);

	//Once a mood is received, we will return the playlist

	if (!transition) {
		return (
			<div className="main-container-init">
				<h1 className="init-header">Ambience</h1>
				<p className="subtitle">
					Take a selfie with your webcam below, and we'll replicate your vibes
					&#128513;
				</p>
				<p className="video">Format video here</p>
			</div>
		);
	}
	return (
		<div className="main-container-mood">
			<h1 className="mood-header">Ambience</h1>
			<p className="subtitle">You are {Mood}</p>
		</div>
	);
}

export default App;
