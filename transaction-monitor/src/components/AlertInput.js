import React, { useState } from 'react';

const AlertInput = ({ onAddAlert }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAlert({ message });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Alert Message</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Add Alert</button>
    </form>
  );
};

export default AlertInput;
