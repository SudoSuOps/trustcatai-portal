import { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function WalletConnect() {
  const [address, setAddress] = useState<string>("");

  const connect = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setAddress(await signer.getAddress());
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4">
      <button onClick={connect} className="bg-green-600 text-black px-4 py-2 rounded">
        Connect Wallet
      </button>
      {address && <p>Connected: {address}</p>}
    </div>
  );
}
