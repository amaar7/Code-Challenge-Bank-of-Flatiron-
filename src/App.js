import React, {useState, useEffect } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransaction] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  

export default App;
