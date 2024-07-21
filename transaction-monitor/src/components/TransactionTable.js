import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction._id}>
            <td>{transaction._id}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
