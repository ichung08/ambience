import React, { useEffect, useState } from "react";

import MoodPage from "./Components/MoodPage";
import FrontPage from "./Components/FrontPage";
import JournalPage from "./Components/Journal/JournalPage";

import Header from "./Components/Header";
/*
  Song component -> possible spotify embed for fixed playlists
  Playlist -> Takes in mood and returns associated playlist
  Theme -> Takes in mood and outputs animated gradient
*/

function App() {
	const [Mood, setMood] = useState("neutral");

	const moodHandler = (mood) => {
		setMood(mood);
	};

	const setPage = () => {
		return Mood === null ? (
			<FrontPage moodHandler={moodHandler} />
		) : (
			//<MoodPage mood={Mood} moodHandler={moodHandler} />
			<JournalPage />
		);
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
