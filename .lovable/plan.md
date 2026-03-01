

## Rencana: Upgrade Card EventDetails -- 3D Premium dengan Dekorasi

### Apa yang berubah

Card event (Akad Nikah & Resepsi) akan di-upgrade menjadi lebih premium, 3D, dan dekoratif:

### 1. Dekorasi Card yang Lebih Kaya

Setiap card akan mendapatkan:
- **Corner ornaments SVG** -- ornamen gold di keempat sudut card (bukan hanya titik kecil)
- **Border glow gradient** -- border yang berubah warna gold saat hover
- **Top ribbon/banner** -- label dekoratif di atas card (misalnya ikon kecil bintang atau hati)
- **Background pattern** -- pola subtle di dalam card (islamic geometric pattern untuk Akad, floral untuk Resepsi)
- **Animated ring/circle** di belakang ikon (Calendar, Clock, MapPin) yang pulse saat hover
- **Divider yang lebih dekoratif** -- mengganti garis biasa dengan ornamen floral kecil

### 2. Efek 3D yang Lebih Dinamis

- **Mouse-tracking tilt** -- card mengikuti posisi mouse (menggunakan `onMouseMove` untuk menghitung `rotateX` dan `rotateY` berdasarkan posisi kursor)
- **Depth layers** -- elemen di dalam card bergerak dengan kecepatan berbeda saat tilt (parallax internal), menciptakan kedalaman 3D
- **Shine sweep** -- efek cahaya bergerak mengikuti posisi mouse
- **Shadow dinamis** -- shadow berubah arah sesuai tilt

### 3. Animasi Masuk yang Lebih Menarik

- Card muncul dengan efek "unfold" -- scale dari kecil ke besar dengan rotasi
- Ikon-ikon di dalam card muncul berurutan (staggered) setelah card terbuka

### Detail Teknis

**File yang diubah:**

1. **`src/components/wedding/EventDetails.tsx`**
   - Tambah state `mouseX` dan `mouseY` per card menggunakan `onMouseMove`/`onMouseLeave`
   - Hitung `rotateX` dan `rotateY` dari posisi mouse relatif terhadap card
   - Tambah SVG corner ornaments (4 sudut)
   - Tambah background pattern SVG (subtle, opacity rendah)
   - Tambah ribbon/icon dekoratif di atas title
   - Upgrade ikon Calendar/Clock/MapPin dengan animated ring background
   - Tambah internal parallax: title dan ikon bergerak sedikit berlawanan arah tilt
   - Shine gradient mengikuti posisi mouse

2. **`src/index.css`**
   - Tambah keyframe `icon-pulse-ring` untuk animasi ring di belakang ikon
   - Tambah class `.card-corner-ornament` untuk styling SVG sudut

### Pendekatan
- Mouse-tracking tilt menggunakan React state + inline transform (bukan framer-motion) untuk performa
- Semua dekorasi SVG inline agar tidak perlu file tambahan
- Corner ornaments menggunakan warna gold dengan opacity 0.2-0.4
- Efek 3D hanya aktif di desktop (hover), di mobile card tetap statis dan rapi
- `pointer-events-none` pada semua elemen dekoratif agar tidak mengganggu interaksi

