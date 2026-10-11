# Deploy — PKBM Cakrawala

Aplikasi Next.js 14 (App Router, JavaScript, Flat Design) di-deploy ke VPS Debian via CloudPanel.

## Informasi Server
| Item | Nilai |
|------|-------|
| Domain | `cakrawala.rapidnet.id` |
| IP | `103.255.133.227` |
| Port SSH | `64001` (bukan 22) |
| App Port | `3009` |
| Site User | `rapidnet-cakrawala` |
| App Dir | `/home/rapidnet-cakrawala/htdocs/cakrawala.rapidnet.id/` |
| Node | v24.21.0 (via nvm, `~/.nvm/nvm.sh`) |
| Log | `~/.next-cakrawala.log` (di home user) |

> Password SSH: simpan di password manager, **jangan commit ke repo**.

## Prasyarat Lokal
- PuTTY (`plink.exe`, `pscp.exe`) — di `I:\Program Files\PuTTY\`
- Node.js lokal (untuk build test sebelum deploy, opsional)
- Helper deploy sudah ada di `deploy/` folder

## Langkah Redeploy (manual, via helper)
Semua command dijalankan dari `I:\pkbm\deploy`:

```powershell
# 1. Buat tarball bersih (tanpa node_modules/.next/.git/deploy/resources)
powershell -NoProfile -ExecutionPolicy Bypass -File make-tarball.ps1

# 2. Upload via pscp (ganti password sesuai panel)
& "I:\Program Files\PuTTY\pscp.exe" -batch -P 64001 -l rapidnet-cakrawala -pw "PASSWORD" I:\pkbm\deploy\pkbm.tar 103.255.133.227:/home/rapidnet-cakrawala/pkbm.tar

# 3. Extract + npm install + build (jalankan di server)
powershell -NoProfile -ExecutionPolicy Bypass -File run-remote.ps1 -ScriptPath deploy.sh -TimeoutSec 600

# 4. Restart app di port 3009
powershell -NoProfile -ExecutionPolicy Bypass -File run-remote.ps1 -ScriptPath start.sh -TimeoutSec 120

# 5. Verifikasi
curl.exe -s -o NUL -w "%{http_code}\n" https://cakrawala.rapidnet.id/
```

## Cara Kerja Helper
- `run-remote.ps1 <script.sh>` — **base64-encode** script lokal → kirim → decode di remote → `bash`. Ini menghindari masalah BOM/encoding stdin dari plink (BOM dari tool Write akan merusak `bash -s`).
- `make-tarball.ps1` — `tar` dari `I:\pkbm`, exclude `node_modules .next .git deploy resources dev.log dev.err transparent_logo.py package-lock.json`.

> Kenapa bukan `npm ci`: tarball sengaja tanpa `package-lock.json`, jadi pakai `npm install`. Kalau mau deterministik, tambahkan `package-lock.json` ke tarball dan ganti ke `npm ci`.

## Status Proses
- App dijalankan via **nohup** (`next start -p 3009`), **bukan supervisor**.
- ⚠️ Kalau server reboot, app **tidak auto-start**. Solusi: daftarkan ke CloudPanel Node.js/Process Manager (supervisor) atau buat systemd unit.

```bash
# Cek proses & port
ss -tlnp | grep :3009
tail -30 ~/.next-cakrawala.log
```

## Catatan
- Build Next 14 menghasilkan 6 halaman: `/`, `/_not-found`, `/lms` (static) + `/lms/[slug]` (dynamic, `generateStaticParams`).
- `next start` (bukan `next dev`) untuk produksi.
- Port 3009 harus di-allow di firewall CloudPanel + di-reverse-proxy CloudPanel ke domain.
