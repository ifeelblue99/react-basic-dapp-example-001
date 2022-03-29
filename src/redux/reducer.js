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
        balance: 'can not get right now...',
      };
    case 'disconnected':
      return {
        isConnected: false,
        address: '',
        balance: '',
      };
    default:
      return state;
  }
}
