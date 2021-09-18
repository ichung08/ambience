import React, { useState } from "react";

import { useTransition } from "react-spring";

function MoodPage({ Mood }) {
	const [visible, setVisible] = useState(false);
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
					We've detected that you are {Mood}
				</p>
			</div>
		</div>
	);
}

export default MoodPage;
