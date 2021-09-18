import React from "react";

function MoodPage({ mood, moodHandler }) {

	const resetMood = () => {
		moodHandler(null);
	}

	return (
		<div className="main-container-mood">
			<h1 className="header-mood">ambience</h1>
			<p className="subtitle">
				Take a selfie using your webcam below, and we'll match your mood with a
				song &#128513;
			</p>
			<button onClick={() => resetMood()}>Reset Mood</button>
			<div>{mood[0].expressions.neutral}</div>
		</div>
	);
}

export default MoodPage;
