"use client";

import React, { useState } from 'react';

function Bank() {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState(0);

  function bankAccount() {
    let currentBalance = 1000;

    return function (amt) {
      currentBalance += amt;
      setBalance(currentBalance);
    };
  }

  const account = bankAccount(); // ⚠️ recreated each render (we'll explain)

  const handleDeposit = () => {
    account(Number(amount));
    setAmount('');
  };

  return (
    <div>
      <h1>Bank Details</h1>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleDeposit}>Deposit</button>

      <br />
      <span>Bank Balance: {balance}</span>
    </div>
  );
}

export default Bank;