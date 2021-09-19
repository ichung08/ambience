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
			setJournalHistory(journalSnap.data().entries);
			console.log(journalHistory);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchJournal();
	}, []);

	return (
		<>
			<div className="main-container journal-page">
				<Header />	
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
