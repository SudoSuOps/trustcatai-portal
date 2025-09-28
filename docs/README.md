# TrustCatAI Portal

Terminal-style web3 portal for secure doc upload → SHA256 hash → on-chain record (TrustCatHash) → optional USDC payment (TrustCatPayments).  
ENS: **trustcat.eth** • Chainlink Oracle • USDC stablecoin.

---

## 📚 Sources
- Solidity: https://docs.soliditylang.org
- ENS: https://ens.domains
- Chainlink Oracles: https://docs.chain.link
- USDC: https://www.circle.com/usdc
- FastAPI: https://fastapi.tiangolo.com
- web3.py: https://web3py.readthedocs.io
- React + Tailwind: https://tailwindcss.com

---

## 🚀 Terminal Ops

### 1. Clone + bootstrap
```bash

cd trustcatai-portal
./bootstrap.sh
### 2. Build & run stack
```bash
docker compose build
docker compose up
```

### 3. Upload doc → hash
```bash
curl -F "file=@/path/to/scan.dcm" http://localhost:8000/upload/
```

### 4. run frontend
```bash
yarn --cwd frontend dev  # or: cd frontend && npm install && npm run dev
```

### 5. Verify hash
```bash
curl http://localhost:8000/verify/<sha256hash>
```

### 6. USDC Payments (optional)
- Frontend requests `payForHash(hash, amount)` via TrustCatPayments.sol
- Wallet signs USDC approve + pay transaction (EIP-20 transfer)
- On-chain event ties wallet → amount → SHA256 hash

### 7. ENS Landing
- Portal resolves at https://trustcat.eth.link (Cloudflare ENS gateway)
- trustcat.eth controls contract + wallet identity (Metamask / WalletConnect)

---

## 🚧 Next Steps Checklist
- Run `./bootstrap.sh` (already included) to scaffold the repo on fresh machines.
- Replace sample assets in `assets/` with real TrustCat logos (dark, light, favicon).
- Deploy `TrustCatHash.sol` and `TrustCatPayments.sol` via Hardhat/Foundry to your target network.
- Configure frontend WalletConnect to resolve `trustcat.eth` ENS and use deployed contract addresses.
- Host frontend (GitHub Pages, Vercel, etc.) and map via `portal.trustcat.eth` ENS (Cloudflare gateway).
