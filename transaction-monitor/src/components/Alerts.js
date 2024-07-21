import React from 'react';

const Alerts = ({ alerts }) => {
  return (
    <div>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id}>{alert.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
