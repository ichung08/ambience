import React, { useState, useEffect } from "react";

import { useTransition, animated } from "@react-spring/core";

import Song from "./Music/Song";
import Playlist from "./Music/Playlist";
import Entry from "./Journal/Entry";
import Journal from "./Journal/Journal";

function MoodPage({ mood }) {
	return (
		<>
			<p className="subtitle">
				We've detected that you are <h4>{mood}</h4>
			</p>
		</>
	);
}

export default MoodPage;
