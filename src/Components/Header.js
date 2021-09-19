import React, { useState } from "react";

import { useSpring, animated, config } from "react-spring";

import Link from "./Link";
import "../Styles/index.css";

function Header() {
	const styles = useSpring({
		loop: true,
		to: [
			{ x: 0, opacity: 1, color: "#003ead" },
			{ x: 0, opacity: 1, color: "#1a84cd" },
			{ x: 0, opacity: 1, color: "#00d4ff" },
			{ x: 0, opacity: 1, color: "#8bffd1" },
			{ x: 0, opacity: 1, color: "#00d4ff" },
			{ x: 0, opacity: 1, color: "#1a84cd" },
			{ x: 0, opacity: 1, color: "#003ead" },
			{ x: 0, opacity: 1, color: "#000000" },
		],
		from: { x: 0, opacity: 1, color: "#000000" },
		config: config.molasses,
	});

	return (
		<>
			<div className="journal-btn">
				<Link href="/journalpage">Journal</Link>
			</div>
			<header className="header">
			<Link href="/">
				<animated.div style={styles}>
					<h1>ambience</h1>
				</animated.div>
			</Link>
			</header>
		</>
	);
	/*
		<>
			<header className="header" data-aos="fade-right" data-aos-duration="1200">
				<h1>ambience</h1>
			</header>
		</>
	);
    */
}
export default Header;
