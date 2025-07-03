import React from 'react';
import styles from '../styles/DiaryEntry.module.css';

type DiaryEntryProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function DiaryEntry({ value, onChange }: DiaryEntryProps) {
    return (
        <textarea
        className={styles.textarea}
        placeholder="Write your thoughts here..."
        value={value}
        onChange={onChange}
        />
    );
}
