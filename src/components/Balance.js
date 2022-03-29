import React from 'react';
import '../style.css';
import { useSelector } from 'react-redux';

export default function Balance() {
  const balance = useSelector((state) => state.balance);

  return (
    <div className="balance">
      <h3>Account Balance: {balance}</h3>
    </div>
  );
}
