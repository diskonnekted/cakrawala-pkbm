# Development — PKBM Cakrawala

Website PKBM Cakrawala: landing page + simulasi LMS. Next.js 14, JavaScript, Tailwind CSS 3, **Flat Design**.

## Jalankan Lokal
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produksi build
npm run start      # serve hasil build
```

> **Catatan Windows:** `npm` adalah `.cmd` shim — `Start-Process npm` gagal. Jalankan langsung:
> `node node_modules\next\dist\bin\next dev -p 3000`

## Struktur
```
app/
  layout.js          # Outfit font (next/font/google), <html lang="id">, metadata
  page.js            # Landing: navbar, hero, program, 4 kelas, keunggulan, cara daftar, footer
  globals.css        # Tailwind directives + .focus-ring utility
  lms/
    page.js          # Dashboard LMS: hero, 4 stat, filter pills (visual), grid MateriCard, CTA
    [slug]/page.js   # Detail materi: banner, sidebar ringkasan+progress, modul <details> accordion
components/
  Button.js  Section.js  Card.js
  lms/MateriCard.js
lib/
  lmsData.js         # 4 MATERI (dummy): slug, kelas, cover, level, durasi, progress, modules[4]×lessons[4]
public/img/          # logo.png (transparan), hero.jpg, comp-network2.jpg, security2.jpg, ai2.jpg, automotive2.jpg
```

## Design System (Flat Design)
Zero shadow/depth. Hover = scale + color shift (bukan shadow). Focus ring solid.

**Tokens** (di `tailwind.config.js` → `theme.extend.colors`):
| Key | Nilai |
|-----|-------|
| `background` | `#FFFFFF` |
| `foreground` | `#111827` |
| `primary` / `primary.hover` | `#3B82F6` / `#2563EB` |
| `secondary` / `.hover` | `#10B981` / `#059669` |
| `accent` / `.hover` | `#F59E0B` / `#D97706` |
| `muted` | `#F3F4F6` |
| `border` | `#E5E7EB` |

- Font: **Outfit** (CSS var `--font-outfit`), `fontFamily.sans`
- Radius: `md` 6px, `lg` 8px
- Icons: `lucide-react`
- Poster-style color blocks; hover `group-hover:scale-[1.02]`; `.focus-ring` = `ring-2 ring-offset-2 ring-primary`

## Pitfalls / Bug yang Sudah Ditemukan
1. **Key warna `border`** di Tailwind **tidak** berkolisi dengan utility border-width — `border-border`, `bg-border`, `text-border`, `divide-border` semuanya generate normal (rgb 229 231 235). Jangan rename ke `line` tanpa perlu.
2. **Divider terlalu terang**: `divide-muted`/`border-muted` (`#F3F4F6`) nyaris tak terlihat di card putih → bikin list "berantakan". Solusi: pakai `divide-border`/`border-border` (`#E5E7EB`).
3. **Logo terpotong**: container persegi `h-11 w-11 overflow-hidden` memotong logo portrait. Solusi: `h-12 w-auto` (tinggi tetap, lebar auto, tanpa `overflow-hidden`).
4. **Logo white-bg**: `logo.png` asli punya latar putih solid. Dibuat transparan via flood-fill (lihat `transparent_logo.py`, butuh `pip install pillow`).
5. **plink stdin BOM**: tool Write menambah BOM ke `.sh`; `bash -s` gagal parse (`source: command not found`). Solusi: `run-remote.ps1` base64-encode script → decode di remote (bypass stdin).
6. **PowerShell PS 5.1**: tidak punya `ProcessStartInfo.ArgumentList`. Gunakan `ProcessStartInfo.Arguments` (string).
7. `&` di HTML ter-escape jadi `&amp;` — grep konten render cari `&amp;`.

## Menambah Materi LMS
Edit `lib/lmsData.js` → tambah object ke array `MATERI`:
```js
{
  slug: "slug-baru",
  title: "Judul",
  kelas: "Nama Kelas",
  cover: "/img/foto.jpg",   // harus di public/img
  level: "Dasar",
  durasi: "12 minggu",
  progress: 0,
  color: "primary",         // primary | secondary | accent | dark
  desc: "Deskripsi",
  modules: [ { judul, lessons: [ { judul, durasi } x4 ] } x4 ]
}
```
`generateStaticParams` + `getMateri` di `[slug]/page.js` otomatis handle.

## Deploy
Lihat **`DEPLOYMENT.md`**.
