import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import Song from "./Song";
//Maps songs from playlist, or embeds a spotify playlist

function Playlist({ mood }) {
	const [showSongs, setShowSongs] = useState(true);
	const transitions = useTransition(showSongs, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 200,
	});

	const playlists = {
		happy: [
			{
				artist: "Drake",
				name: "Knife talk",
				playtime: "4 minutes",
			},
			{
				artist: "Taylor Swift",
				name: "Wildest Dreams",
				playtime: "3 minutes",
			},
		],

		neutral: [
			{
				artist: "Drake",
				name: "Headlines",
				playtime: "2 minutes 30 seconds",
			},
			{
				artist: "Taylor Swift",
				name: "Bomboclaat tings",
				playtime: "3 minutes",
			},
		],

		sad: [
			{
				artist: "Drake",
				name: "Headlines",
				playtime: "2 minutes 30 seconds",
			},
			{
				artist: "Taylor Swift",
				name: "Bomboclaat tings",
				playtime: "3 minutes",
			},
		],

		surprised: [
			{
				artist: "Drake",
				name: "Headlines",
				playtime: "2 minutes 30 seconds",
			},
			{
				artist: "Taylor Swift",
				name: "Bomboclaat tings",
				playtime: "3 minutes",
			},
		],

		disgusted: [
			{
				artist: "Drake",
				name: "Headlines",
				playtime: "2 minutes 30 seconds",
			},
			{
				artist: "Taylor Swift",
				name: "Bomboclaat tings",
				playtime: "3 minutes",
			},
		],

		fearful: [
			{
				artist: "Drake",
				name: "Headlines",
				playtime: "2 minutes 30 seconds",
			},
			{
				artist: "Taylor Swift",
				name: "Bomboclaat tings",
				playtime: "3 minutes",
			},
		],

		angry: [
			{
				artist: "Drake",
				name: "Headlines",
				playtime: "2 minutes 30 seconds",
			},
			{
				artist: "Taylor Swift",
				name: "Bomboclaat tings",
				playtime: "3 minutes",
			},
		],
	};

	return <div className="playlist"></div>;
}

export default Playlist;
