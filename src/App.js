import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions); // Initialize filteredTransactions
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  // Updated and filteredTransactions based on the search term
  useEffect(() => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
