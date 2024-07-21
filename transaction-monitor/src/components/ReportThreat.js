import React, { useState } from 'react';
import axios from 'axios';

function ReportThreat() {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/report-threat', { description, email });
      setSuccess(true);
      setError('');
    } catch (err) {
      setError('Failed to submit the report. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="ReportThreat">
      <h2>Report a Threat</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email (optional):</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit Report</button>
      </form>
      {success && <p>Report submitted successfully!</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default ReportThreat;
