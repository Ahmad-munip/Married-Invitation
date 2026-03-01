

## Upgrade Visual Card Event Details

### Perubahan Warna
Card akan diubah dari tema gelap ke **coklat terang (warm beige/tan)** yang lebih cerah dan hangat:
- Background card: gradient `hsl(35 40% 88%)` ke `hsl(35 35% 82%)` (krem/beige)
- Text: coklat tua `hsl(30 50% 20%)` agar kontras
- Aksen tetap gold tapi lebih warm/hangat

### Dekorasi Baru yang Ditambahkan

**A. Ornamen Lebih Besar dan Detail**
- Corner ornaments diperbesar (dari 12x12 menjadi 20x20) dengan desain yang lebih rumit: double-curl, titik-titik berjajar, dan daun kecil
- Tambah **border frame dekoratif ganda** (double border dengan jarak) di sekeliling card

**B. Objek Dekoratif Tambahan di Dalam Card**
- **Floating mini hearts/stars** kecil yang melayang di dalam card (animasi drift)
- **Garis-garis emas dekoratif** (horizontal filigree lines) di atas dan bawah title
- **Rosette/medallion** di atas title card -- lingkaran dekoratif dengan pola bintang di dalamnya
- **Dotted arc patterns** -- lengkungan titik-titik gold di background card

**C. Ikon yang Lebih Menarik**
- Ikon Calendar/Clock/MapPin diberi background lingkaran gold solid (bukan hanya ring pulse)
- Tambah **sparkle dots** kecil di sekitar ikon

**D. Bottom Decoration**
- Tambah **swag/garland SVG** di bagian bawah card -- ornamen gantung seperti untaian bunga

**E. Card Glow Border**
- Border card menggunakan gradient gold yang animated (berputar pelan)

### Detail Teknis

**File yang diubah:**

1. **`src/components/wedding/EventDetails.tsx`**
   - Ubah background card dari `glass-strong` menjadi gradient coklat terang solid
   - Perbesar dan perdetail `CornerOrnament` SVG
   - Tambah komponen `FloatingMiniHearts` -- 5-6 heart/star kecil yang melayang
   - Tambah komponen `Rosette` -- medallion dekoratif SVG di atas title
   - Tambah komponen `FiligreeLine` -- garis emas dekoratif horizontal
   - Tambah komponen `SwagGarland` -- ornamen gantung SVG di bawah card
   - Tambah `DottedArcs` -- lengkungan titik background
   - Upgrade `IconWithRing` menjadi lingkaran solid gold dengan sparkle
   - Ubah warna teks ke coklat tua
   - Tambah animated gradient border

2. **`src/index.css`**
   - Tambah keyframe `mini-float` untuk floating hearts
   - Tambah keyframe `border-rotate` untuk animated gradient border
   - Tambah keyframe `sparkle-pop` untuk efek sparkle di ikon
