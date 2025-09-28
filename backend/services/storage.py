import os
from pathlib import Path

STORAGE_DIR = Path(os.environ.get("TRUSTCAT_STORAGE", "./files"))
STORAGE_DIR.mkdir(parents=True, exist_ok=True)


def store_file(data: bytes, filename: str) -> str:
    dest = STORAGE_DIR / filename
    with open(dest, "wb") as f:
        f.write(data)
    return str(dest.resolve())
