import React, { useState, useEffect } from "react";

import { useTransition, animated } from "@react-spring/core";

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
