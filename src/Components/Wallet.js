import React, { useState, useEffect } from 'react';
import './Wallet.css';

const Wallet = () => {
  const [balance, setBalance] = useState(150); // Sample default
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Fetch transactions (dummy for now)
    setTransactions([
      { id: 1, type: 'credit', label: 'Winnings', amount: 21, date: '2025-04-28' },
      { id: 2, type: 'debit', label: 'Entry Fee for Contest #2', amount: 21, date: '2025-04-27' },
      { id: 3, type: 'credit', label: 'Wallet Top-Up', amount: 100, date: '2025-04-26' },
    ]);
  }, []);

  const handleAddMoney = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && amt > 0) {
      setBalance(balance + amt);
      setTransactions([
        { id: transactions.length + 1, type: 'credit', label: 'Wallet Top-Up', amount: amt, date: new Date().toISOString().split('T')[0] },
        ...transactions,
      ]);
      setAmount("");
    }
  };

  return (
    <div className="wallet">
      <h2>💰 Wallet</h2>
      <div className="wallet-balance">Balance: ₹{balance}</div>

      <div className="wallet-add">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddMoney}>➕ Add Money</button>
      </div>

      <div className="wallet-history">
        <h3>Transaction History</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Label</th>
              <th>Type</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.label}</td>
                <td style={{ color: tx.type === 'credit' ? 'green' : 'red' }}>
                  {tx.type === 'credit' ? 'Credit' : 'Debit'}
                </td>
                <td>₹{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
