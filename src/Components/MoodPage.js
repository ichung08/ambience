import React from "react";

import playlist from "./Music/Playlist";
import AudioPlayer from "./Music/AudioPlayer";

function MoodPage({ mood }) {
	return (
		<>
			<p className="subtitle">
				We've detected that you are <h4>{mood}</h4>
			</p>
			<AudioPlayer tracks={playlist} mood={mood} />
		</>
	);
}

export default MoodPage;
