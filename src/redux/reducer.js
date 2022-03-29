const initialState = {
  address: 'Connect to a wallet!',
  balance: '',
  isConnected: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'connected':
      return {
        isConnected: true,
        address: action.walletAddress,
        balance: action.ethBalance,
      };
    case 'disconnected':
      return {
        isConnected: false,
        address: '',
        balance: 'can not get right now...',
      };
    default:
      return state;
  }
}
