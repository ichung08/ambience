import React from "react";
import "../Styles/index.css";

import { useTransition, animated } from "react-spring";

function FrontPage() {
	return (
		<div className="main-container-init">
			<h1 className="header-init">ambience</h1>
			<p className="subtitle">
				Take a selfie using your webcam below, and we'll match your mood with a
				song &#128513;
			</p>
		</div>
	);
}

export default FrontPage;
