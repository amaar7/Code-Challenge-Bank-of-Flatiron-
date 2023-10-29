import React, { useState } from 'react';

function TransactionForm({ transactions, setTransactions }) {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={newTransaction.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
