import React from 'react';
  
function TransactionTable({ transactions }) {
    if (!transactions || transactions.length === 0) {
      return <p>No transactions to display.</p>;
    }  

  return (
    <table>
      <thead>
        <tr>
          <th className="table-header">Date</th>
          <th className="table-header">Description</th>
          <th className="table-header">Category</th>
          <th className="table-header">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
