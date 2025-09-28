from fastapi import FastAPI

from routes import upload, verify

app = FastAPI(title="TrustCatAI Portal")

app.include_router(upload.router, prefix="/upload")
app.include_router(verify.router, prefix="/verify")


@app.get("/")
async def root():
    return {"ok": True, "msg": "TrustCatAI backend live"}
