import React from "react";
import { RiQuillPenFill } from "react-icons/ri"; 
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
				<Link href="/journalpage"><RiQuillPenFill color="white" size="3em"/></Link>
			</div>
			<header className="header">
			<Link href="/">
				<h1 style={{color: "white"}}>ambience</h1>
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
