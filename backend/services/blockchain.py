import os
from web3 import Web3

w3 = Web3(Web3.HTTPProvider(os.getenv("WEB3_RPC", "https://rpc.yourchain.net")))
acct = w3.eth.account.from_key(os.getenv("PRIVATE_KEY", "0xPRIVATE_KEY"))

with open("chain/TrustCatHash.abi", "r", encoding="utf-8") as f:
    hash_abi = f.read()
with open("chain/TrustCatPayments.abi", "r", encoding="utf-8") as f:
    pay_abi = f.read()

hash_contract = w3.eth.contract(
    address=os.getenv("HASH_CONTRACT", "0xYourTrustCatContract"),
    abi=hash_abi,
)
payment_contract = w3.eth.contract(
    address=os.getenv("PAYMENT_CONTRACT", "0xYourPaymentsContract"),
    abi=pay_abi,
)


def record_hash(digest: str) -> str:
    tx = hash_contract.functions.storeHash(digest).build_transaction({
        "from": acct.address,
        "nonce": w3.eth.get_transaction_count(acct.address),
        "gas": 200000,
        "gasPrice": w3.to_wei("5", "gwei"),
    })
    signed = acct.sign_transaction(tx)
    tx_hash = w3.eth.send_raw_transaction(signed.rawTransaction)
    return tx_hash.hex()


def pay_for_hash(digest: str, amount: int) -> str:
    tx = payment_contract.functions.payForHash(digest, amount).build_transaction({
        "from": acct.address,
        "nonce": w3.eth.get_transaction_count(acct.address),
        "gas": 200000,
        "gasPrice": w3.to_wei("5", "gwei"),
    })
    signed = acct.sign_transaction(tx)
    tx_hash = w3.eth.send_raw_transaction(signed.rawTransaction)
    return tx_hash.hex()


def check_hash(digest: str) -> bool:
    return hash_contract.functions.hashExists(digest).call()
