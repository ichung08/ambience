import React from "react";

function MoodPage({ Mood }) {
	return (
		<div className="main-container-mood">
			<h1 className="header-mood">ambience</h1>
			<p className="subtitle">
				Take a selfie using your webcam below, and we'll match your mood with a
				song &#128513;
			</p>
		</div>
	);
}

export default MoodPage;
