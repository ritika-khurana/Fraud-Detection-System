// src/components/TransactionForm.js
import React, { useState } from 'react';

function TransactionForm() {
  const [formData, setFormData] = useState({
    Type_of_online_transaction: '',
        The_amount_of_the_transaction: '',
        TransactionID: '',
        Balance_before_the_transaction : '',
        Balance_after_the_transaction : '',
        RecipientID: '',
        Initial_balance_of_recipient_before_the_transaction: '',
        new_balance_of_recipient_before_the_transaction: '',
        IsFlaggedFraud: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your backend for processing.
    // You can use axios or any other HTTP library to make the API request.
    console.log(formData);
    // Reset the form fields
    setFormData({
        Type_of_online_transaction: '',
        The_amount_of_the_transaction: '',
        TransactionID: '',
        Balance_before_the_transaction : '',
        Balance_after_the_transaction : '',
        RecipientID: '',
        Initial_balance_of_recipient_before_the_transaction: '',
        new_balance_of_recipient_before_the_transaction: '',
        IsFlaggedFraud: '',
    });
  };

  return (
    <div className='big-container'>
    <div className="form-container">
      <h2>Transaction Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Sex:
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Weight (in kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Height (in cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Symptoms:
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default TransactionForm;
