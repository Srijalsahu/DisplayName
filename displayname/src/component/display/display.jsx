// display/display.jsx

import React, { useState } from 'react';
import './display.module.css';

const Display = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFullName(`Full Name: ${firstName} ${lastName}`);
      setError('');
    } else {
      setError('Please enter both first name and last name');
    }
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {fullName && <p>{fullName}</p>}
    </div>
  );
};

export default Display;
