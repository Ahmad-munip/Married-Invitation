

## Rencana: Tambah Video dan Perbaikan Desain agar Lebih Menarik

### 1. Video Background di Hero Section
Mengganti gambar statis di Hero Section dengan video cinematic yang di-loop. Video akan diputar otomatis tanpa suara (muted autoplay) sebagai latar belakang, dengan overlay gelap agar teks tetap terbaca.

- Menggunakan tag `<video>` dengan atribut `autoPlay`, `muted`, `loop`, `playsInline`
- Video dari sumber gratis (CDN Pexels/Pixabay -- romantic/nature theme)
- Fallback ke gambar `hero-bg.jpg` jika video gagal dimuat
- Diterapkan juga di **Splash Screen** sebagai background

### 2. Video Section Baru -- "Our Moments" 
Menambahkan section baru khusus video setelah Gallery, berisi video embed (YouTube/self-hosted) dari momen pasangan. Menggunakan aspect ratio 16:9 dengan frame dekoratif gold.

### 3. Perbaikan Desain agar Tidak Kaku dan Polos

**A. Parallax Scroll Effect**
- Hero background bergerak lebih lambat dari konten saat scroll (parallax)
- Menggunakan `useScroll` dan `useTransform` dari framer-motion

**B. Staggered Section Animations**
- Setiap section muncul dengan animasi yang lebih dinamis (tidak hanya fade-in sederhana)
- Cards di EventDetails muncul satu per satu dengan efek "reveal" dari bawah
- Timeline items di LoveStory muncul berurutan dengan delay yang lebih natural

**C. Hover Effects pada Cards**
- Cards di EventDetails mendapatkan efek hover: slight tilt (3D perspective) + glow yang lebih intens
- Gallery images mendapatkan overlay gold gradient saat hover

**D. Gradient Background Transitions antar Section**
- Menambahkan gradient smooth antar section agar transisi lebih halus (bukan potongan kasar)
- Menggunakan `bg-gradient-to-b` yang overlap antar section

**E. Animated Section Dividers**
- FloralDivider ditingkatkan dengan animasi "draw" saat masuk viewport
- Menambahkan variasi divider (tidak semua sama)

**F. Text Reveal Animations**
- Judul section muncul huruf per huruf atau kata per kata
- Menggunakan framer-motion `staggerChildren`

**G. Countdown Timer Enhancement**
- Angka berubah dengan animasi flip (seperti flip clock)
- Menambahkan efek pulse saat angka berubah

### Detail Teknis

**File yang diubah:**

1. **`src/components/wedding/HeroSection.tsx`**
   - Ganti `<img>` background dengan `<video>` element
   - Tambah parallax effect menggunakan `useScroll` + `useTransform`
   - Tambah text reveal animation pada nama pasangan

2. **`src/components/wedding/SplashScreen.tsx`**
   - Tambah video background (sama seperti Hero)

3. **`src/components/wedding/VideoSection.tsx`** (BARU)
   - Section video baru dengan embed player
   - Frame dekoratif gold di sekitar video
   - Play button custom dengan animasi pulse

4. **`src/components/wedding/EventDetails.tsx`**
   - Tambah hover tilt effect pada cards (CSS `perspective` + `rotateX/Y`)
   - Staggered animation pada card items

5. **`src/components/wedding/CountdownTimer.tsx`**
   - Animasi flip pada angka yang berubah
   - Pulse glow effect saat angka berubah

6. **`src/components/wedding/Gallery.tsx`**
   - Gold gradient overlay saat hover pada gambar
   - Staggered masonry animation

7. **`src/components/wedding/LoveStory.tsx`**
   - Timeline line yang "menggambar diri sendiri" saat scroll
   - Staggered text reveal

8. **`src/components/wedding/FloralFrame.tsx`**
   - FloralDivider dengan animasi draw (pathLength animation)
   - Variasi divider baru

9. **`src/pages/Index.tsx`**
   - Tambahkan `VideoSection` setelah Gallery
   - Gradient overlap antar section

10. **`src/index.css`**
    - Tambah keyframes: `flip-digit`, `card-tilt`, `text-reveal`
    - Class: `.card-3d-hover`, `.text-stagger`

### Sumber Video
- Hero/Splash background: Video gratis dari Pixabay CDN (romantic nature/bokeh)
- Our Moments section: Placeholder YouTube embed yang bisa diganti nanti

### Pendekatan
- Semua animasi menggunakan `will-change` dan `transform` untuk GPU acceleration
- Video menggunakan `poster` attribute untuk loading cepat
- Responsive: video dimatikan di koneksi lambat (`prefers-reduced-motion`)
- Efek parallax hanya aktif di desktop (performa mobile)

