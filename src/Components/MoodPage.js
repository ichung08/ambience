import React from "react";

import playlist from "./Music/Playlist";
import AudioPlayer from "./Music/AudioPlayer";
import Entry from "./Journal/Entry";

function MoodPage({ mood, moodHandler }) {
	const resetMood = () => {
		moodHandler(null);
	};

	return (
		<>
		
			<p className="subtitle">
				How I'm feeling: <span className="subtitle-mood">{mood}</span>
				<div className="entry">
				<Entry mood={mood}/>
				</div>
			</p>
			<button className="reset-btn" onClick={() => resetMood()}>
				Change Ambience
			</button>
			
			
			<AudioPlayer tracks={playlist} mood={mood} />

			
		</>
	);
}

export default MoodPage;
