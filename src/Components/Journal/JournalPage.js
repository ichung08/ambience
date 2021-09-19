import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../backend/config";
import Header from "../Header";

import "../../Styles/journal.css";

import Journal from "./Journal";

const JournalPage = ({ mood }) => {
	const [journalHistory, setJournalHistory] = useState();
	const [loading, setLoading] = useState(true);

	const fetchJournal = async () => {
		const docRef = doc(db, "journal", "ZUhGVK39tj8yGfDhR7Jj");
		const journalSnap = await getDoc(docRef);

		if (journalSnap.exists()) {
			const entries = journalSnap.data().entries;
			const len = entries.length;

			let array = [];
			for (let i = 0; i < 5; i++) {
				array = [entries[len - i - 1], ...array];
			}
			setJournalHistory(array);
			console.log(array);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchJournal();
	}, []);

	return (
		<div className="main-container journal">
			<Header />
			<p className="subtitle">Your emotional history &#128522;</p>
			<div className="journal-page">
				{loading ? (
					"loading"
				) : (
					<>
						{journalHistory.map((entry) => (
							<Journal key={entry.id} entry={entry} />
						))}
					</>
				)}
			</div>
		</div>
	);
};

/*
<div>
	{journalHistory.map((entry) => (
		<Journal key={entry.id} entry={entry} />
	))}
</div>
*/
export default JournalPage;
