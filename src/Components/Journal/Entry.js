import React, { useState } from "react";
import {
	doc,
	updateDoc,
	arrayUnion,
	Timestamp,
} from "firebase/firestore";
import { db } from "../../backend/config";
import "../../Styles/journal.css";


const Entry = ({ mood }) => {
    const [term, setTerm] = useState("");

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
		setTerm("");
	};
    return (
        <div className="journal-input">
				<form onSubmit={saveEntry}>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						placeholder="What's on your mind?"
					></input>
					<input type="submit"></input>
				</form>
        </div>
    )
}

export default Entry;