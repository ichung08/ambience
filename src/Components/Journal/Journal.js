import React, { useState, useEffect } from "react";

import { Timestamp } from "firebase/firestore";

const Journal = ({ entry }) => {
	const date = entry.timestamp.toDate().toString().substring(4, 16);
	console.log("Date:", date);
	return (
		<div className="journal-entry">
			<p className="card-text">
				<span>{entry.mood}</span>
				<span>{date}</span>
			</p>
			<p>{entry.body}</p>
		</div>
	);
};

export default Journal;
