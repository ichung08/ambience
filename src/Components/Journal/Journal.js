import React, { useState, useEffect } from "react";

const Journal = ({ entry }) => {
	return (
		<div className="journal-entry">
			<p>
				You were {entry.mood}, and you wrote "{entry.body}"
			</p>
		</div>
	);
};

export default Journal;
