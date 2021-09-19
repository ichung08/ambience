import React, { useEffect, useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

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

	return (
		<>
			<Router>
				<div className="main-container">
					<Header moodHandler={setMood} />

					<Switch>
						<Route path="/">
							<FrontPage moodHandler={moodHandler} />
						</Route>

						<Route path="/moodpage">
							<MoodPage moodHandler={moodHandler} />
						</Route>

						<Route
							exact
							path="/journalpage"
							render={() => <JournalPage mood={Mood} />}
						/>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
