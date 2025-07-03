import React, { useState } from 'react';
import DiaryEntry from './DiaryEntry';
import styles from '../styles/DiaryEntry.module.css'

export default function EntryCard() {
    const [entry, setEntry] = useState('');

    const today = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={styles.card}>
        <div className={styles.date}>{today}</div>
        <DiaryEntry value={entry} onChange={(e) => setEntry(e.target.value)} />
        </div>
    );
}
