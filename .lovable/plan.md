

## Rencana: Menghias Splash Screen dengan Animasi Dekoratif dan Menambahkan Background Music

### Apa yang akan berubah

**1. Animasi dekoratif di Splash Screen**
Splash screen saat ini hanya menampilkan teks dan tombol. Akan ditambahkan elemen-elemen visual animasi agar terlihat lebih hidup dan mewah:

- **Partikel bintang/sparkle berkilauan** - titik-titik kecil gold yang muncul dan menghilang secara acak di seluruh layar, seperti efek debu emas
- **Cincin emas berputar (rotating rings)** - lingkaran tipis gold dengan opacity rendah yang berputar perlahan di belakang nama pasangan, memberikan kesan cinematic
- **Ornamen sudut (corner ornaments)** - dekorasi gold di 4 sudut layar menggunakan SVG path, muncul dengan animasi fade-in bertahap
- **Efek floating petals** - kelopak bunga kecil yang jatuh perlahan di background splash screen (mirip FloatingPetals tapi versi ringan khusus splash)
- **Garis cahaya bergerak (light sweep)** - efek cahaya yang menyapu dari kiri ke kanan secara berkala

**2. Background music otomatis**
- Menambahkan musik relaxing bertema pernikahan menggunakan URL audio gratis (instrumental piano/string romantis)
- Musik mulai diputar saat tamu menekan tombol "Buka Undangan"
- Tombol play/pause yang sudah ada di ClosingSection akan mengontrol musik ini
- Audio element akan dipindahkan ke level Index.tsx agar state-nya dibagi antara splash action dan ClosingSection control

### Detail Teknis

**File yang diubah:**

1. **`src/components/wedding/SplashScreen.tsx`**
   - Tambahkan komponen animasi sparkle particles (20-30 titik dengan posisi & timing acak)
   - Tambahkan SVG ornamen sudut dengan animasi stagger fade-in
   - Tambahkan rotating ring elements di belakang nama pasangan
   - Tambahkan floating petals ringan di background
   - Semua menggunakan framer-motion dan CSS keyframes

2. **`src/index.css`**
   - Tambahkan keyframes baru: `sparkle`, `rotate-slow`, `light-sweep`
   - Tambahkan class utility: `.animate-sparkle`, `.animate-rotate-slow`

3. **`src/components/wedding/ClosingSection.tsx`**
   - Terima `audioRef` dan `isPlaying`/`setIsPlaying` sebagai props (bukan membuat audio sendiri)
   - Hapus internal audio state, gunakan props dari parent

4. **`src/pages/Index.tsx`**
   - Pindahkan audio state management ke sini
   - Buat `audioRef` dengan URL musik relaxing wedding (free royalty-free source)
   - Saat tombol "Buka Undangan" ditekan: mulai putar musik
   - Pass audio props ke ClosingSection

