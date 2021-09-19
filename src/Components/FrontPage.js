import React from "react";
import Video from "./Video";
import "../Styles/index.css";
import { useTransition, animated } from "@react-spring/core";

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
      <p className="subtitle">Take a selfie using your webcam below, and we'll match your mood with a song &#128513;</p>
      <Video moodHandler={moodHandler} className="video" />
    </>
  );
}

export default FrontPage;
