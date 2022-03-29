import React from 'react';
import Wallet from './components/Wallet';
import './style.css';
import Balance from './components/Balance';

export default function App() {
  return (
    <div className="app">
      <h1>React Dapp example</h1>
      <Wallet />
      <Balance />
    </div>
  );
}
