import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')  
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
        setFilteredTransactions(data); 
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  
  // Updated and filteredTransactions based on the search term
  useEffect(() => {
    if (transactions) {
      const filtered = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  }, [searchTerm, transactions]);
  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
          <div style={{ margin: '10px 0' }}> 
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
