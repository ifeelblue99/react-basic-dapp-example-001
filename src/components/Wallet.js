import React from 'react';
import '../style.css';
import store from '../redux/store';
import { useSelector } from 'react-redux';

export default function Wallet() {
  const { address } = useSelector((state) => state);
  const { ethereum } = window;

  const [errorMsg, setErrorMsg] = React.useState('');

  function connectToWallet() {
    if (ethereum && ethereum.isMetaMask) {
      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((addresses) => {
          store.dispatch({
            type: 'connected',
            walletAddress: addresses[0],
            ethBalance: 0,
          });
          setErrorMsg('');
        })
        .catch((err) => setErrorMsg('Err: ' + err.message));
    } else {
      setWalletAddress('ERR: Can not find metamask');
    }
  }

  return (
    <div className="wallet">
      <p>Wallet: {address}</p>
      <button onClick={connectToWallet}>Connect</button>
      {errorMsg}
    </div>
  );
}
