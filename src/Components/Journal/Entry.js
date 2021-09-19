import React, { useState } from 'react';
import { doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore';
import { db, firebase } from '../../backend/config';

const Entry = ({ mood }) => {
    const [term, setTerm] = useState('');

    const saveEntry = async (event) => {
        event.preventDefault();
        const d = new Date();
        const data = {
            mood: mood,
            timestamp: Timestamp.fromDate(d),
            body: term
        };

        try {
            const docRef = await updateDoc(doc(db, "journal", "ZUhGVK39tj8yGfDhR7Jj"), {entries: arrayUnion(data)});
            console.log(docRef);
        } catch (e) {
            console.error("error adding document: " + e);
        }
    }

    return (
        <>
        <div>
            Write your thoughts here!
        </div>
        <div>
            Emotion: {mood}
        </div>
        <form onSubmit={saveEntry}>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)} placeholder="How are you feeling?"></input>
            <input type="submit"></input>
        </form>
        </>
    );
}

export default Entry;