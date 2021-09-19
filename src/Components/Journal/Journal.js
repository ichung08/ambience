import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../backend/config";

const Journal = () => {
	const [entries, setEntries] = useState(null);
	const fetchEntries = async () => {
		const query = await getDocs(collection(db, "journal"));
		setEntries(query.docs);
	};

	useEffect(() => {
		fetchEntries();
	}, []);

	return (
		<div>
			{entries &&
				entries.map((entry) => {
					return <div key={entry.id}>entry</div>;
				})}
		</div>
	);
};

export default Journal;
