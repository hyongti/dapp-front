import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    [process.env.REACT_APP_CHAIN_ID as string]: process.env
      .REACT_APP_RPC as string,
    // ...
  },
  qrcode: true,
});

export default provider;
