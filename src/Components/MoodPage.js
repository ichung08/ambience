import React, { useState, useEffect } from "react";

import { useTransition, animated } from "@react-spring/core";

import Song from "./Music/Song";
import Playlist from "./Music/Playlist";

function MoodPage({ mood, moodHandler }) {
	const resetMood = () => {
		moodHandler(null);
	};

	return (
		<>
			<p
				className="subtitle"
				data-aos="fade-in"
				data-aos-duration="600"
				data-aos-delay="1200"
			>
				We've detected that you are <h4>{mood}</h4>
			</p>

			<button onClick={() => resetMood()}>Reset Mood</button>
		</>
	);
}

export default MoodPage;
