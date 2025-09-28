#!/usr/bin/env bash
set -euo pipefail

echo "[*] Bootstrapping trustcatai-portal structure..."

mkdir -p \
  docs \
  frontend/src/{components,pages} \
  backend/{routes,services} \
  chain/scripts \
  assets

touch docs/README.md
cat > frontend/package.json <<'JSON'
{
  "name": "trustcatai-portal",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
JSON
echo "[✓] Done."
