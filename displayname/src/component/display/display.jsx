// Display.jsx

import React, { useState } from 'react';
import styles from './display.module.css';

const Display = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`Full Name: ${firstName} ${lastName}`);
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
      {submitted && <p>{fullName}</p>}
    </div>
  );
};

export default Display;
