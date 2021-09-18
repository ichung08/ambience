import React, { useState } from "react";

import { useTransition } from "react-spring";

function MoodPage({ mood, moodHandler }) {

	const resetMood = () => {
		moodHandler(null);
	}

	return (
		<div className="item">
			<div className="main-container-mood">
				<h1
					className="header-mood"
					data-aos="fade-right"
					data-aos-duration="1200"
				>
					ambience
				</h1>
				<p
					className="subtitle"
					data-aos="fade-in"
					data-aos-duration="600"
					data-aos-delay="1200"
				>
					We've detected that you are {mood[0].expressions.neutral}
				</p>
				<button onClick={() => resetMood()}>Reset Mood</button>
			</div>
		</div>
	);
}

export default MoodPage;
