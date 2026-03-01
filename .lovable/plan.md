

## Perbaikan Bug dan Visual

### Masalah yang Ditemukan

**1. Nama "Risma Mawlina" terpotong di mobile**
Di HeroSection, nama "Risma Mawlina" pecah menjadi "Risma Mawli" + "na" di layar kecil karena font terlalu besar (`text-6xl`). Perlu penyesuaian ukuran font di mobile.

**2. Select dropdown RSVP ada bullet/dot aneh**
Elemen `<select>` menampilkan simbol bullet di depan option ("* Hadir"). Perlu tambah styling khusus untuk select.

**3. Teks kutipan di Closing Section bertabrakan dengan tombol musik**
Di mobile, kutipan Al-Quran di bagian bawah halaman bisa tertutup oleh tombol musik yang fixed di kanan bawah. Perlu padding-right atau margin pada area tersebut.

### Rencana Perbaikan

**File: `src/components/wedding/HeroSection.tsx`**
- Kurangi ukuran font nama di mobile dari `text-6xl` menjadi `text-5xl` agar tidak terpotong
- Tambah `whitespace-nowrap` pada container nama untuk mencegah line break di tengah nama

**File: `src/components/wedding/CardDecorations.tsx`**
- Tambah styling khusus untuk select element di `premiumInputClass` atau buat class terpisah `premiumSelectClass` dengan `appearance-none` dan custom arrow

**File: `src/components/wedding/RSVPSection.tsx`**
- Gunakan class select yang sudah diperbaiki pada elemen `<select>`

**File: `src/components/wedding/ClosingSection.tsx`**
- Tambah `pb-16` atau padding bottom ekstra pada section quote agar tidak tertutup tombol musik di mobile

### Detail Teknis

1. HeroSection - ubah `text-6xl md:text-8xl lg:text-9xl` menjadi `text-4xl sm:text-5xl md:text-8xl lg:text-9xl` dan tambah `whitespace-nowrap` pada h1
2. CardDecorations - export `premiumSelectClass` yang menambahkan `appearance-none` dan background arrow SVG
3. RSVPSection - ganti `premiumInputClass` pada `<select>` dengan `premiumSelectClass`
4. ClosingSection - tambah padding bottom pada container quote untuk menghindari overlap dengan music button
