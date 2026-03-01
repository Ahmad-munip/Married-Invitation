

## Terapkan Desain Premium ke Semua Form

### Apa yang berubah

Form di **RSVPSection**, **WishesSection**, dan **DigitalEnvelope** akan mendapatkan desain yang sama seperti card EventDetails: background coklat terang, corner ornaments, dekorasi, dan efek 3D.

### Perubahan per File

**1. `src/components/wedding/RSVPSection.tsx`**
- Ganti `glass-strong` pada form container dengan background gradient coklat terang (`hsl(35 40% 88%)` ke `hsl(35 35% 82%)`)
- Tambah `CornerOrnament` SVG di keempat sudut form
- Tambah `FloatingMiniHearts` di dalam form
- Tambah `FiligreeLine` di atas dan bawah judul form fields
- Tambah animated gradient border (border-rotate)
- Ubah warna label dan teks ke coklat tua
- Input fields: background krem lebih terang dengan border gold subtle
- Submit button: tetap gradient-gold, tambah glow effect
- Success state juga pakai desain yang sama

**2. `src/components/wedding/WishesSection.tsx`**
- Form submit: ganti `glass-strong` dengan background coklat terang + corner ornaments + dekorasi
- Wish cards (list ucapan): ganti `glass` dengan style coklat terang yang lebih ringan
- Input/textarea: background krem dengan border gold
- Tambah `FiligreeLine` sebagai separator antara form dan list

**3. `src/components/wedding/DigitalEnvelope.tsx`**
- Account cards: ganti `glass-strong` dengan background coklat terang + corner ornaments
- Tambah `FloatingMiniHearts` dan dekorasi
- Nomor rekening: warna coklat tua
- Copy button: style gold yang lebih prominent
- Animated gradient border pada setiap card

### Komponen yang Di-reuse

Komponen dekoratif dari EventDetails akan diekstrak atau diduplikasi:
- `CornerOrnament` -- ornamen sudut SVG
- `FloatingMiniHearts` -- heart/star melayang
- `FiligreeLine` -- garis emas dekoratif horizontal
- Pattern background (geometric/floral)
- Animated gradient border CSS

### Pendekatan Teknis

Karena komponen dekorasi sudah ada di EventDetails, saya akan membuat file shared `src/components/wedding/CardDecorations.tsx` yang berisi semua komponen dekoratif yang bisa dipakai ulang di RSVP, Wishes, dan DigitalEnvelope. Ini menghindari duplikasi kode.

**File baru:**
- `src/components/wedding/CardDecorations.tsx` -- shared decorative components

**File yang diubah:**
- `src/components/wedding/EventDetails.tsx` -- import dari CardDecorations (refactor)
- `src/components/wedding/RSVPSection.tsx` -- terapkan desain premium
- `src/components/wedding/WishesSection.tsx` -- terapkan desain premium
- `src/components/wedding/DigitalEnvelope.tsx` -- terapkan desain premium

### Konsistensi Warna
- Background form: `hsl(35 40% 88%)` ke `hsl(35 35% 82%)`
- Teks utama: `hsl(30 50% 20%)` (coklat tua)
- Label: `hsl(30 40% 35%)` (coklat medium)
- Input background: `hsl(35 40% 92%)` (krem terang)
- Input border: `hsl(35 45% 65% / 0.4)` (gold subtle)
- Input focus ring: `hsl(35 55% 50% / 0.5)`

