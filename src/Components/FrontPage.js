import React, { useState } from "react";
import "../Styles/index.css";

import { useTransition, animated } from "@react-spring/core";

<div className="main-container-init">
	<h1 className="header-init">ambience</h1>
	<p className="subtitle">
		Take a selfie using your webcam below, and we'll match your mood with a song
		&#128513;
	</p>
</div>;

function FrontPage() {
	/*
	const [visible, setVisible] = useState(false);
	const transition = useTransition(visible, {
		from: { x: 0, y: 0, opacity: 0 },
		enter: { X: 0, y: 0, opacity: 1 },
		leave: { x: 0, y: 0, opacity: 0 },
	});
*/
	return (
		<div className="item">
			<div
				className="main-container-init"
				data-aos="fade-in"
				data-aos-duration="1000"
			>
				<h1 className="header-init">ambience</h1>
				<p className="subtitle">
					Take a selfie using your webcam below, and we'll match your mood with
					a song &#128513;
				</p>
			</div>
		</div>
	);
}

export default FrontPage;
