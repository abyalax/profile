
---

- [📝 Dokumentasi Setup - Web Profile dengan Contentlayer + Next.js](#-dokumentasi-setup---web-profile-dengan-contentlayer--nextjs)
  - [📦 Struktur Folder Konten](#-struktur-folder-konten)
  - [⚙️ Langkah Setup](#️-langkah-setup)
  - [🛠️ Build untuk Production](#️-build-untuk-production)
  - [📚 Catatan Tambahan](#-catatan-tambahan)
- [⚙️ Config ContentLayer `contentlayer.config.ts`](#️-config-contentlayer-contentlayerconfigts)
  - [📄 `Project` Document Type](#-project-document-type)
  - [🏷️ `fields`](#️-fields)
  - [🧠 `computedFields`](#-computedfields)
  - [📦 `makeSource`](#-makesource)
- [Deployment](#deployment)
  - [📁 `vercel.json`](#-verceljson)
  - [📦 `package.json` Scripts](#-packagejson-scripts)
  - [⚙️ `next.config.ts`](#️-nextconfigts)
  - [⚠️ Catatan Penting](#️-catatan-penting)


---

## 📝 Dokumentasi Setup - Web Profile dengan Contentlayer + Next.js

### 📦 Struktur Folder Konten

Konten utama situs berada di folder:

```
📁 contents/
└── 📁 projects/
    ├── contentlayer.mdx
    ├── first-project.mdx
    └── second-project.mdx
```

Setiap file `.mdx` di dalam folder `projects/` merepresentasikan satu entri proyek yang akan dibaca oleh Contentlayer.

---

### ⚙️ Langkah Setup

1. **Install Dependencies (jika belum)**

   ```bash
   npm install
   ```

2. **Jalankan Contentlayer (Watcher)**
   Di terminal pertama:

   ```bash
   npx contentlayer dev
   ```

   Ini akan memantau perubahan file `.mdx` dan menggenerate file data yang bisa digunakan di Next.js.

3. **Jalankan Next.js Dev Server**
   Buka terminal baru, lalu jalankan:

   ```bash
   npm run dev
   ```

   Situs Next.js bisa diakses di `http://localhost:3000`.

---

### 🛠️ Build untuk Production

Untuk membangun project:

1. **Build Contentlayer**

   ```bash
   npx contentlayer build
   ```

2. **Build Next.js**

   ```bash
   npm run build
   ```

3. **Start Next.js (optional untuk testing build)**

   ```bash
   npm start
   ```

---

### 📚 Catatan Tambahan

* Pastikan sudah mengonfigurasi `contentlayer.config.ts` dan `next.config.js` sesuai dengan struktur folder `contents/projects`.
* File `.mdx` bisa menggunakan frontmatter YAML seperti:

  ```mdx
  ---
  title: "First Project"
  description: "Deskripsi singkat proyek"
  slug: "first-project"
  ---
  Konten markdown di sini...
  ```

---

Berikut penjelasan singkat untuk konfigurasi `contentlayer.config.ts` yang sudah ditambahkan:

---

## ⚙️ Config ContentLayer `contentlayer.config.ts`

```ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
```

Import fungsi untuk mendefinisikan tipe dokumen dan membuat konfigurasi Contentlayer.

---

### 📄 `Project` Document Type

```ts
const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',

```

* Mendefinisikan dokumen bertipe `Project`.
* Akan memproses semua file `.mdx` dalam folder `contents/projects/`.

---

### 🏷️ `fields`

```ts
fields: {
  title: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'date',
    required: true,
  },
},
```

* `title`: Judul proyek (wajib).
* `date`: Tanggal proyek (wajib).

---

### 🧠 `computedFields`

```ts
computedFields: {
  url: {
    type: 'string',
    resolve: (doc) => `/contents/projects/${doc._raw.flattenedPath}`,
  },
},
```

* `url`: Field yang dihitung otomatis untuk setiap proyek.
* Berguna untuk membuat URL berdasarkan path file `.mdx`.

---

### 📦 `makeSource`

```ts
export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Project],
})
```

* Menentukan direktori konten (`contents/`) dan daftar tipe dokumen yang digunakan (`Project`).


Dengan konfigurasi ini, Contentlayer akan membaca semua file `.mdx` di `contents/projects/`, mengekstrak metadata-nya (seperti `title` dan `date`), dan menyediakan data yang siap dipakai di halaman Next.js.

---

## Deployment

### 📁 `vercel.json`

```json
{
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "installCommand": "npm install --legacy-peer-deps"
}
```

**Penjelasan:**

* `installCommand`: Menghindari konflik peer dependencies saat instalasi package.
* `NODE_ENV`: Memastikan environment yang digunakan adalah production.

---

### 📦 `package.json` Scripts

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "npx contentlayer build && next build",
  "start": "next start",
  "lint": "next lint"
}
```

**Penjelasan:**

* `build`: Menjalankan `contentlayer` **sebelum** `next build` untuk memastikan direktori `.contentlayer/generated` selalu up to date.
* Gunakan `npx` agar tidak perlu install global package.

---

### ⚙️ `next.config.ts`

```ts
import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"
import path from "path"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
}

export default withContentlayer(nextConfig)
```

**Penjelasan:**

* Alias `@` → root project directory.
* Integrasi `withContentlayer` wajib untuk Contentlayer berjalan dengan benar dalam Next.js.

---

### ⚠️ Catatan Penting

* ❌ **Jangan gunakan existing build saat deploy ke Vercel**.
* 🔄 Ini akan menyebabkan:

  * Modul `.contentlayer/generated` gagal ditemukan
  * Path alias seperti `@/components/...` error secara random
  * Build menjadi tidak konsisten akibat cache/partial build

**✅ Solusi:**

* Gunakan **`npx contentlayer build`** dalam script `build`
* Lakukan deploy dari dashboard Vercel dengan **Clear Build Cache**
* Atau pastikan command CLI sudah menjalankan urutan yang benar

```bash
vercel --prod --force
```

Opsional `--force` untuk mencegah reuse build lama (alternatif dari dashboard).
Lihat dokumentasi ini [vercel.com/docs](https://vercel.com/docs/cli/deploy#force)

---

