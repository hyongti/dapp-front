import React, { useState, useEffect } from "react";
import provider from "./provider";
import web3 from "./web3";
import WalletConnect from "@walletconnect/client";

function App() {
  const [accounts, setAccounts] = useState<any>([]);
  const handleConnectClick = async () => {
    await provider.enable();
  };

  const handleDisconnectClick = async () => {
    await provider.disconnect();
  };

  useEffect(() => {
    provider.onConnect(async (connector: WalletConnect) => {
      const { accounts } = connector;
      const balance = await web3.eth.getBalance(accounts[0]);
      console.log(balance);
      console.log(connector);
      setAccounts(accounts);
    });
  }, [accounts]);
  return (
    <div>
      <h1>Connect to WalletConnect</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>accounts: {accounts}</div>
        <button onClick={handleConnectClick}>connect</button>
        <button onClick={handleDisconnectClick}>disconnect</button>
      </div>
    </div>
  );
}

export default App;
