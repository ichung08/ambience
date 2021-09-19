import React from "react";
import Video from "./Video";
import Header from "./Header";
import "../Styles/index.css";

function FrontPage({ moodHandler }) {
	/*
	const [visible, setVisible] = useState(false);
	const transition = useTransition(visible, {
		from: { x: 0, y: 0, opacity: 0 },
		enter: { X: 0, y: 0, opacity: 1 },
		leave: { x: 0, y: 0, opacity: 0 },
	});
*/
	return (
		<>
		<div className="main-container front-page">
			<Header />
			<p className="subtitle">
				How are you feeling?
			</p>
			<Video moodHandler={moodHandler} className="video" />
		</div>
		</>
	);
}

export default FrontPage;
