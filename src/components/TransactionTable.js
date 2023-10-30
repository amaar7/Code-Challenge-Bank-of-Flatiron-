import React from 'react';
  
function TransactionTable({ transactions }) {
    if (!transactions || transactions.length === 0) {
      return <p>No transactions to display.</p>;
    }  

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #000', padding: '5px' }}>Date</th>
          <th style={{ border: '1px solid #000', padding: '5px' }}>Description</th>
          <th style={{ border: '1px solid #000', padding: '5px' }}>Category</th>
          <th style={{ border: '1px solid #000', padding: '5px' }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid #000', padding: '5px' }}>{transaction.date}</td>
            <td style={{ border: '1px solid #000', padding: '5px' }}>{transaction.description}</td>
            <td style={{ border: '1px solid #000', padding: '5px' }}>{transaction.category}</td>
            <td style={{ border: '1px solid #000', padding: '5px' }}>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
