---
id: 1
label: real
title: Personal Website
description: Web Profile to showcase my projects, experience and skills in software development and latest technologies. I share articles, case studies, and projects I've built to provide insight of software development
techstack:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Contentlayer
urlgithub: https://github.com/abyalax/profile
urlweb: https://github.com/abyalax/profile
date: 2025-05-04
---

## 🧾 Tentang Proyek

**Profile Website** ini dibuat untuk menampilkan **projek, pengalaman, dan keterampilan** saya di bidang **software development**. Selain sebagai tempat showcase, saya juga berbagi **artikel, studi kasus, dan insight** seputar teknologi serta proses pengembangan perangkat lunak.

🔗 Live: [https://profile-abya.vercel.app/](https://profile-abya.vercel.app/)

📂 Repository: [https://github.com/abyalax/profile](https://github.com/abyalax/profile)

---

## ⚙️ Teknologi yang Digunakan

### 🔨 Framework & Tools

* **Next.js 15.3.1 (App Router)** – Fondasi utama aplikasi, mendukung struktur modular dan routing berbasis file.
* **Tailwind CSS v3** – Untuk styling cepat dan konsisten dengan utility-first approach.
* **TypeScript** – Memberikan tipe data statis untuk mencegah bug sejak awal.
* **Contentlayer** – Digunakan untuk mengelola konten halaman *Projects* dan *Blogs* dari file `.mdx`, sehingga mudah untuk menulis dan memelihara konten berbasis markdown dengan JSX.

### 📦 Library Pendukung

* **React Spring** dan **Framer Motion** – Menambahkan animasi yang halus dan interaktif.
* **React Toastify** – Untuk menampilkan notifikasi atau feedback user-friendly.
* **date-fns** – Untuk memformat dan memanipulasi tanggal secara efisien.

---

### Routing dan Halaman

Next.js App Router memisahkan halaman dan layout secara eksplisit. Setiap direktori dalam `app/` mewakili rute, dengan `page.tsx` sebagai entry point.

Contoh:

* `/projects` → Menampilkan semua proyek
* `/projects/[slug]` → Detail proyek berdasarkan slug dari MDX
* `/blog` dan `/blog/[slug]` → Untuk artikel dan studi kasus

### Contentlayer

Contentlayer membaca file `.mdx` dari `content/`, mengonversinya menjadi data siap pakai di runtime. Setiap file memiliki frontmatter seperti `title`, `date`, `tags`, dan `description`, lalu dikombinasikan dengan JSX untuk fleksibilitas.

---

## 👨‍💻 Fitur Utama

* ✅ **Dynamic Routing** untuk blog dan proyek
* ✅ **Animasi smooth & interaktif** berkat Framer Motion dan React Spring
* ✅ **Responsive design** dengan Tailwind CSS
* ✅ **Markdown-enhanced content** via `.mdx` (dengan syntax highlight dan komponen interaktif)
* ✅ **Fast & SEO-friendly** berkat optimasi Next.js

---

## 🎯 Target Pengguna

* **Rekruter & HR** – Melihat pengalaman, keahlian, dan proyek yang telah saya kerjakan
* **Developer** – Mengevaluasi struktur kode dan pendekatan teknis yang saya pakai
* **Klien potensial** – Mengetahui kapabilitas teknis dan kreativitas saya dalam membangun solusi digital

---
