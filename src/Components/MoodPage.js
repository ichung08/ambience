import React from "react";

function MoodPage({ Mood }) {
	return (
		<div className="main-container-mood">
			<h1 className="header-mood">ambience</h1>
			<p className="subtitle">We've detected that you are {Mood}</p>
		</div>
	);
}

export default MoodPage;
