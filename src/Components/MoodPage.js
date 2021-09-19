import React from "react";

import playlist from "./Music/Playlist";
import AudioPlayer from "./Music/AudioPlayer";
import Entry from "./Journal/Entry";
import Header from "./Header";

function MoodPage({ mood, moodHandler }) {
	const resetMood = () => {
		moodHandler(null);
	};

	return (
		<>
		<div className="main-container">
			<Header />
			<p className="subtitle">
				You're feeling: <span className="subtitle-mood">{mood}</span>
				<div className="entry">
				<Entry mood={mood}/>
				</div>
			</p>
			<button className="reset-btn" onClick={() => resetMood()}>
				Change Ambience
			</button>
			<AudioPlayer tracks={playlist} mood={mood} />
			</div>
			
		</>
	);
}

export default MoodPage;
