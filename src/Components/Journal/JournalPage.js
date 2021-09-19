import React, { useEffect, useState } from "react";
import {
	collection,
	doc,
	updateDoc,
	getDoc,
	arrayUnion,
	Timestamp,
} from "firebase/firestore";
import { db } from "../../backend/config";

import "../../Styles/journal.css";

import Journal from "./Journal";

const JournalPage = ({ mood }) => {
	const [journalHistory, setJournalHistory] = useState();
	const [loading, setLoading] = useState(true);
	const [term, setTerm] = useState("");

	const fetchJournal = async () => {
		const docRef = doc(db, "journal", "ZUhGVK39tj8yGfDhR7Jj");
		const journalSnap = await getDoc(docRef);

		if (journalSnap.exists()) {
			setJournalHistory(journalSnap.data().entries);
			console.log(journalHistory);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchJournal();
	}, []);

	const saveEntry = async (event) => {
		event.preventDefault();
		const d = new Date();
		const data = {
			mood: mood,
			timestamp: Timestamp.fromDate(d),
			body: term,
		};

		try {
			const docRef = await updateDoc(
				doc(db, "journal", "ZUhGVK39tj8yGfDhR7Jj"),
				{ entries: arrayUnion(data) }
			);
			console.log("journal saved with ID: " + docRef.id);
		} catch (e) {
			console.error("error adding document: " + e);
		}
	};

	return (
		<>
			<p className="subtitle">Journal your current thoughts! &#128522;</p>
			<div className="journal-page">
				<form className="journal-input" onSubmit={saveEntry}>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						placeholder="How are you feeling?"
					></input>
					<input type="submit"></input>
				</form>
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
		</>
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
