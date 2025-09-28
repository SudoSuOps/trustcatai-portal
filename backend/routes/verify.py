from fastapi import APIRouter

from services import blockchain

router = APIRouter()


@router.get("/{digest}")
async def verify_hash(digest: str):
    exists = blockchain.check_hash(digest)
    return {"hash": digest, "exists": exists}
