from fastapi import APIRouter, UploadFile, File

from services import hashing, storage, blockchain

router = APIRouter()


@router.post("/")
async def upload_doc(file: UploadFile = File(...)):
    contents = await file.read()
    digest = hashing.hash_bytes(contents)
    storage_path = storage.store_file(contents, file.filename)
    tx_hash = blockchain.record_hash(digest)
    return {
        "filename": file.filename,
        "hash": digest,
        "storage": storage_path,
        "tx": tx_hash,
    }
