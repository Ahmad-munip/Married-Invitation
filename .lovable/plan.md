
## Rencana: Menambahkan Hiasan Bingkai Natural pada Website

### Apa yang akan ditambahkan

Bingkai dekoratif bergaya **floral gold** yang menyatu secara natural dengan desain website. Bingkai ini akan tampil di beberapa bagian utama sebagai elemen hiasan yang konsisten.

### Detail Hiasan

**1. Komponen `FloralFrame` (baru)**
Komponen reusable berisi SVG ornamen floral gold yang bisa ditempatkan di sudut-sudut section. Terdiri dari:
- Lengkungan tanaman merambat (vine/leaf curves) di 4 sudut
- Garis halus gold dengan opacity rendah agar menyatu dengan background gelap
- Animasi fade-in saat discroll (menggunakan framer-motion whileInView)

**2. Penempatan bingkai di section-section utama**
- **Hero Section** -- bingkai floral di keempat sudut layar, mengelilingi nama pasangan
- **Event Details** -- border ornamen di atas dan bawah area konten
- **Love Story** -- hiasan sudut kiri-atas dan kanan-bawah
- **Gallery** -- frame tipis di sekitar area gallery
- **Closing Section** -- bingkai lengkap mengelilingi quote

**3. Divider upgrade**
Divider antar section yang sekarang berupa garis horizontal sederhana akan diganti menjadi divider floral -- garis gold dengan ornamen daun/bunga kecil di tengahnya.

### Detail Teknis

**File baru:**
- `src/components/wedding/FloralFrame.tsx` -- komponen SVG bingkai floral dengan props untuk mengontrol posisi (top-left, top-right, bottom-left, bottom-right, atau full), ukuran, dan animasi

**File yang diubah:**
1. `src/components/wedding/HeroSection.tsx` -- tambahkan FloralFrame di keempat sudut
2. `src/components/wedding/EventDetails.tsx` -- tambahkan ornamen border atas dan bawah
3. `src/components/wedding/ClosingSection.tsx` -- tambahkan bingkai lengkap di sekitar quote
4. `src/pages/Index.tsx` -- ganti divider-gold biasa dengan komponen FloralDivider yang lebih dekoratif
5. `src/index.css` -- tambahkan keyframe `grow-vine` untuk animasi SVG path yang "tumbuh" secara natural menggunakan stroke-dashoffset

### Pendekatan Desain
- Semua ornamen menggunakan warna gold (`hsl(40 72% 52%)`) dengan opacity rendah (0.2-0.5) agar tidak mengganggu konten
- SVG path digambar langsung di kode (bukan file terpisah) untuk performa optimal
- Animasi `whileInView` agar bingkai muncul secara natural saat user scroll ke section tersebut
- Responsive: ukuran bingkai menyesuaikan di mobile (lebih kecil) dan desktop (lebih besar)
