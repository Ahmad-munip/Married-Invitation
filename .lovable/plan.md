

## Rencana: Partikel 3D, Objek Hiasan Tambahan, dan Audio Cues per Section

### Apa yang akan ditambahkan

**1. Partikel 3D menggunakan React Three Fiber**
Menambahkan canvas 3D di halaman depan (Splash Screen dan Hero Section) dengan partikel-partikel emas yang melayang dalam ruang 3D -- memberikan efek kedalaman dan kemewahan yang tidak bisa dicapai dengan CSS biasa.

- **Splash Screen**: Canvas 3D dengan ratusan partikel gold kecil yang melayang perlahan, berputar di ruang 3D
- **Hero Section**: Partikel 3D yang bergerak mengikuti scroll, memberikan efek parallax 3D

**2. Objek hiasan tambahan di seluruh halaman**
- **Floating orbs**: Bola-bola cahaya gold transparan yang melayang di berbagai section
- **Twinkling stars**: Bintang kecil yang berkedip-kedip di background seluruh halaman
- **Particle trails**: Jejak partikel gold tipis yang mengikuti scroll
- **Bokeh circles**: Lingkaran blur yang bergerak perlahan di background, mirip efek bokeh kamera

**3. Background music control yang lebih baik**
- Tombol play/pause yang sudah ada akan ditingkatkan dengan indikator visual (equalizer bars animasi saat musik bermain)
- Volume control slider yang muncul saat hover pada tombol musik

### Detail Teknis

**Dependency baru:**
- `@react-three/fiber@^8.18` -- React renderer untuk Three.js
- `three@^0.160` -- Library 3D
- `@react-three/drei@^9.122.0` -- Helper untuk React Three Fiber

**File baru:**

1. **`src/components/wedding/Particles3D.tsx`**
   - Komponen `GoldParticles3D` menggunakan `@react-three/fiber` Canvas
   - Ratusan titik partikel emas dalam ruang 3D (menggunakan `Points` dari drei)
   - Animasi rotasi perlahan menggunakan `useFrame`
   - Render di belakang konten dengan `position: fixed` dan `pointer-events: none`

2. **`src/components/wedding/TwinklingStars.tsx`**
   - 30-40 bintang kecil dengan posisi acak yang berkedip menggunakan framer-motion
   - Masing-masing bintang punya timing berbeda agar terlihat natural

3. **`src/components/wedding/BokehCircles.tsx`**
   - Lingkaran blur besar (bokeh effect) yang melayang perlahan
   - Warna gold/amber dengan opacity sangat rendah
   - Animasi CSS float dengan durasi berbeda

**File yang diubah:**

4. **`src/pages/Index.tsx`**
   - Import dan tambahkan `Particles3D` sebagai layer fixed di belakang konten (muncul setelah splash screen dibuka)
   - Import dan tambahkan `TwinklingStars` sebagai layer global
   - Import dan tambahkan `BokehCircles` sebagai layer global

5. **`src/components/wedding/SplashScreen.tsx`**
   - Tambahkan `GoldParticles3D` canvas sebagai background layer 3D
   - Partikel lebih banyak dan lebih aktif di splash screen

6. **`src/components/wedding/ClosingSection.tsx`**
   - Tingkatkan tombol musik dengan animasi equalizer bars (3 bar yang bounce saat musik bermain)
   - Tambahkan volume slider yang muncul saat hover/tap pada tombol musik

7. **`src/index.css`**
   - Tambahkan keyframes: `twinkle`, `bokeh-float`, `eq-bounce`
   - Class utility: `.animate-twinkle`, `.animate-bokeh`, `.eq-bar`

8. **`src/components/wedding/HeroSection.tsx`**
   - Tambahkan floating orbs (bola cahaya gold transparan) di sekitar nama pasangan

9. **`src/components/wedding/EventDetails.tsx`**
   - Tambahkan beberapa twinkling stars lokal di sekitar kartu acara

10. **`src/components/wedding/LoveStory.tsx`**
    - Tambahkan bokeh circles di background section

11. **`src/components/wedding/Gallery.tsx`**
    - Tambahkan floating orbs di sekitar gallery

### Pendekatan Desain

- Canvas 3D menggunakan `alpha: true` dan `position: fixed` agar transparan di atas background batik
- Semua partikel 3D berwarna gold (hsl 40, 72%, 52%) dengan variasi brightness
- Performance: jumlah partikel dibatasi (200-300 titik), menggunakan `Points` geometry yang efisien
- Responsive: ukuran canvas mengikuti viewport, jumlah partikel dikurangi di mobile
- Audio control menggunakan `audioRef` yang sudah ada di Index.tsx, ditambahkan volume slider

