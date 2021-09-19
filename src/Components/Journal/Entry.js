import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../backend/config';

const Entry = ({ mood }) => {
    const [term, setTerm] = useState('');

    const saveEntry = async (event) => {
        event.preventDefault();
        const d = new Date();
        const data = {
            mood: mood,
            timestamp: d.getTime(),
            body: term
        };

        try {
            const docRef = await addDoc(collection(db, "journal"), data);
            console.log("journal saved with ID: " + docRef.id);
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