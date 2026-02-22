
## Rencana: Menambahkan Objek Dekoratif dan Background Batik Coklat

### Apa yang akan berubah

**1. Warna background utama diubah menjadi coklat gelap (bukan hitam)**
Saat ini background menggunakan hitam pekat (`0 0% 4%`). Akan diubah menjadi coklat gelap hangat agar tidak terlalu gelap dan sesuai nuansa batik. Warna-warna turunan (card, secondary, muted, border) juga disesuaikan ke nuansa coklat.

**2. Background pattern batik SVG**
Ditambahkan pattern batik yang dibuat langsung dengan CSS/SVG sebagai latar belakang halaman. Pattern ini berupa motif kawung/parang sederhana dengan warna coklat-gold yang sangat halus (opacity rendah), agar menyatu natural tanpa mengganggu konten.

**3. Objek dekoratif tambahan**
Beberapa elemen hias baru akan ditambahkan di seluruh halaman:
- **Mandala rings** -- lingkaran ornamental bergaya batik di beberapa section (Hero, LoveStory, Gallery)
- **Floating diamond shapes** -- bentuk wajik/belah ketupat kecil yang melayang perlahan di background (motif khas batik)
- **Decorative corner ornaments yang lebih kaya** -- menambah detail pada FloralFrame yang sudah ada
- **Section separator yang lebih ornamental** -- divider ditingkatkan dengan motif batik/kawung
- **Ambient glow circles** -- lingkaran cahaya coklat-gold halus di background beberapa section

### Detail Teknis

**File yang diubah:**

1. **`src/index.css`**
   - Ubah CSS variables: `--background` dari hitam ke coklat gelap (`25 20% 10%`), `--card` ke coklat sedikit lebih terang, `--secondary`, `--muted`, `--border` semua ke nuansa coklat
   - Tambahkan class `.batik-pattern` dengan SVG pattern inline (motif kawung/parang)
   - Tambahkan keyframe `float-diamond` untuk animasi wajik melayang
   - Tambahkan class `.ambient-glow` untuk lingkaran cahaya background

2. **`src/pages/Index.tsx`**
   - Tambahkan div dengan class `batik-pattern` sebagai layer background di belakang semua konten
   - Tambahkan komponen `FloatingDiamonds` -- elemen wajik kecil yang melayang di seluruh halaman

3. **`src/components/wedding/FloralFrame.tsx`**
   - Perkaya SVG ornamen dengan elemen tambahan: spiral kecil, titik-titik dekoratif, dan garis lengkung ekstra
   - Tambahkan komponen `MandalaRing` -- lingkaran ornamental SVG bergaya batik
   - Upgrade `FloralDivider` dengan menambahkan motif kawung kecil di sisi kiri dan kanan

4. **`src/components/wedding/HeroSection.tsx`**
   - Tambahkan `MandalaRing` di belakang nama pasangan
   - Tambahkan ambient glow circles

5. **`src/components/wedding/SplashScreen.tsx`**
   - Tambahkan batik pattern layer di background
   - Tambahkan floating diamond elements
   - Sesuaikan overlay agar nuansa coklat terlihat

6. **`src/components/wedding/EventDetails.tsx`**
   - Tambahkan subtle batik pattern di background cards
   - Tambahkan corner dot ornaments pada glass cards

7. **`src/components/wedding/LoveStory.tsx`**
   - Tambahkan mandala ring di belakang timeline center dots
   - Tambahkan ambient glow di background section

8. **`src/components/wedding/Gallery.tsx`**
   - Tambahkan FloralFrame di section gallery
   - Tambahkan ambient glow decoration

9. **`src/components/wedding/ClosingSection.tsx`**
   - Ubah "Ahmad & Sarah" menjadi "Munip & Risma" (perbaikan konsistensi)
   - Tambahkan batik pattern di background section
