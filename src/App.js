import React, { useState } from "react";

import MoodPage from "./Components/MoodPage";
import FrontPage from "./Components/FrontPage";
import JournalPage from "./Components/Journal/JournalPage";
import Header from "./Components/Header";
import Route from './Components/Route';
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

	return (
		<>
				<div className="main-container">
					<Header />

						<Route path="/">
							{Mood ? <MoodPage mood={Mood} moodHandler={moodHandler} /> : <FrontPage moodHandler={moodHandler} /> }
						</Route>

						<Route path="/journalpage">
						<JournalPage mood={Mood} />
						</Route>
				</div>
		</>
	);
}

export default App;
