

## Rencana: Menambahkan Objek Akar/Vine dan Lebih Banyak Elemen Dekoratif

### Apa yang akan ditambahkan

**1. Komponen baru: `VineRoots` -- Akar-akar dekoratif gold**
Elemen SVG berupa akar/sulur tanaman yang merambat dari tepi layar. Akan tampil di sisi kiri dan kanan halaman, dengan animasi "tumbuh" saat user scroll. Akar-akar ini menggunakan SVG path yang berliku-liku (bezier curves) dengan cabang-cabang kecil dan titik-titik dekoratif.

**2. Komponen baru: `FloatingLeaves` -- Daun melayang**
Daun-daun kecil bergaya gold yang melayang dan berputar perlahan di seluruh halaman (mirip floating petals tapi dengan bentuk daun yang lebih detail dan variasi ukuran).

**3. Komponen baru: `GoldDust` -- Debu emas halus**
Partikel-partikel sangat kecil yang bergerak perlahan ke atas, memberikan efek "debu emas" yang melayang. Berbeda dari partikel 3D yang sudah ada -- ini lebih halus dan menggunakan CSS murni.

**4. Penambahan vine/akar lokal di setiap section**
Setiap section akan mendapatkan akar kecil yang merambat dari sudut-sudutnya, menambah kesan organik dan natural.

### Detail Teknis

**File baru:**

1. **`src/components/wedding/VineRoots.tsx`**
   - SVG path akar yang merambat dari sisi kiri dan kanan layar
   - Animasi `pathLength` dari framer-motion agar tampak "tumbuh"
   - Props: `side` (left/right/both), `density` (jumlah cabang)
   - Posisi fixed agar tampil sepanjang halaman

2. **`src/components/wedding/FloatingLeaves.tsx`**
   - 20 elemen daun SVG dengan bentuk berbeda-beda (3 variasi bentuk daun)
   - Animasi CSS: rotate + float + fade
   - Posisi acak, ukuran acak, timing acak

3. **`src/components/wedding/GoldDust.tsx`**
   - 50+ partikel sangat kecil (1-3px) yang bergerak naik perlahan
   - Menggunakan CSS keyframe `float-up` untuk performa optimal
   - Warna gold dengan opacity sangat rendah (0.1-0.3)

**File yang diubah:**

4. **`src/index.css`**
   - Tambahkan keyframes: `grow-vine` (stroke-dashoffset animation), `leaf-float` (kombinasi rotate + translate), `dust-rise` (partikel naik perlahan)
   - Class utility: `.animate-leaf`, `.animate-dust`

5. **`src/pages/Index.tsx`**
   - Import dan tambahkan `VineRoots` sebagai layer global (sisi kiri dan kanan)
   - Import dan tambahkan `FloatingLeaves` sebagai layer global
   - Import dan tambahkan `GoldDust` sebagai layer global

6. **`src/components/wedding/HeroSection.tsx`**
   - Tambahkan akar/vine lokal yang merambat dari sudut bawah kiri dan bawah kanan
   - Tambahkan beberapa elemen dekoratif kecil (titik-titik gold, lingkaran kecil)

7. **`src/components/wedding/SplashScreen.tsx`**
   - Tambahkan vine corners yang merambat dari keempat sudut
   - Tambahkan gold dust particles

8. **`src/components/wedding/EventDetails.tsx`**
   - Tambahkan vine kecil di sisi kiri dan kanan cards
   - Tambahkan floating leaf accents

9. **`src/components/wedding/LoveStory.tsx`**
   - Vine mengikuti garis timeline (merambat dari atas ke bawah di tengah)
   - Tambahkan leaf accents di sekitar love story items

10. **`src/components/wedding/Gallery.tsx`**
    - Vine frame di sekitar gallery grid
    - Leaf accents di corner gallery

11. **`src/components/wedding/CountdownTimer.tsx`**
    - Vine kecil di bawah dan atas section
    - Gold dust di sekitar countdown boxes

12. **`src/components/wedding/RSVPSection.tsx`**
    - Vine accents di sudut form

13. **`src/components/wedding/WishesSection.tsx`**
    - Vine kecil di sisi section

14. **`src/components/wedding/DigitalEnvelope.tsx`**
    - Vine ornament di sekitar kartu bank

15. **`src/components/wedding/MapsSection.tsx`**
    - Vine frame tipis di sekitar map container

16. **`src/components/wedding/ClosingSection.tsx`**
    - Vine yang lebih besar dan kaya di seluruh section penutup

17. **`src/components/wedding/FloralFrame.tsx`**
    - Tambahkan komponen `SectionVine` -- vine/akar lokal yang bisa ditempatkan di section manapun
    - Upgrade `VineCorner` dengan lebih banyak cabang dan detail

### Pendekatan Desain
- Semua vine/akar menggunakan warna gold (`hsl(40 72% 52%)`) dengan opacity 0.1-0.3
- SVG path menggunakan bezier curves untuk tampilan organik
- Animasi `pathLength` agar vine tampak "tumbuh"
- Daun menggunakan 3 variasi bentuk untuk kesan natural
- Gold dust sangat halus (opacity rendah) agar tidak mengganggu konten
- Responsive: vine lebih simpel di mobile, lebih kaya di desktop
