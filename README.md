# 💍 Undangan Pernikahan Ayu & Nurohim — Premium Digital Invitation

Selamat datang di repositori resmi **Undangan Pernikahan Ayu & Nurohim**. Proyek aplikasi web ini dirancang secara khusus untuk memberikan pengalaman undangan digital yang sangat premium, interaktif, responsif, dan sarat akan cita rasa seni tinggi.

Website undangan ini dirancang, dikembangkan, dan diproduksi secara eksklusif oleh **SAVANNAH Married**.

---

## 🎨 Tentang Pembuat: SAVANNAH Married

**SAVANNAH Married** adalah studio kreatif spesialis perancang undangan pernikahan digital kelas premium (*Luxury Digital Wedding Invitation*). Kami menggabungkan estetika modern kelas atas (*modern glassmorphism*, palet warna HSL terkurasi, dan mikro-animasi halus) dengan nilai tradisi seni yang anggun (seperti arsitektur lengkungan emas Javanese, ornamen kelopak bunga berguguran, dan kaligrafi premium).

Komitmen kami adalah menciptakan karya digital yang tidak hanya berfungsi sebagai penyampai informasi, tetapi juga sebagai seni visual yang memukau tamu undangan Anda sejak detik pertama halaman terbuka.

---

## ✨ Fitur Unggulan & Inovasi Teknologi

Undangan digital ini dilengkapi dengan fitur-fitur mutakhir yang menjadikannya salah satu undangan digital tercanggih dan terindah:

1.  **Desain Responsif Terkunci Viewport (`100dvh`)**
    *   Halaman pembuka (*Splash Screen*) diprogram menggunakan tinggi viewport dinamis (`h-[100dvh]`) dan penyelarasan vertikal terpusat (`my-auto`). 
    *   Hal ini memastikan seluruh elemen (calligraphy nama, bingkai foto, kartu tamu, dan tombol buka) selalu tampil **presisi, seimbang, dan 100% utuh tanpa terpotong** di perangkat apa pun, baik layar ponsel kecil, tablet, hingga browser laptop/desktop.
2.  **Bingkai Foto Monogram Emas dengan Slow-Orbit Ring**
    *   Foto pre-wedding utama dibingkai dalam lingkaran putih elegan dengan efek bayangan mendalam.
    *   Dikelilingi oleh ornamen SVG bunga melingkar berlapis emas (*metallic gold gradient* `#D4AF37`) serta cabang daun emas yang indah.
    *   Dilengkapi dua buah cincin luar putus-putus (*dashed rings*) yang berputar lambat dalam arah berlawanan untuk menciptakan efek kedalaman 3D (*slow-orbit motion*).
3.  **Floating Gold Glass Audio Player (Mute/Unmute Kontrol)**
    *   Pengendali musik di pojok kanan bawah dirancang menggunakan efek *frosted gold glass* (`backdrop-blur-md` dengan list border emas).
    *   Menampilkan **Internal Equalizer** (4 batang spektrum audio emas) yang melompat-lompat dinamis di dalam tombol saat lagu diputar, dan speaker otomatis bergeser ke atas untuk menjaga kerapian visual.
    *   Dilengkapi efek gelombang suara luar (*expanding sonar waves*) yang meluas lembut dan kontrol volume geser vertikal yang muncul halus menggunakan `AnimatePresence`.
4.  **Instant Deployment Tanpa Caching (PWA Bypass Update)**
    *   Sistem PWA dioptimalkan dengan pengaturan `selfDestroy: true` di berkas `vite.config.ts`.
    *   Ini memecahkan masalah umum undangan digital tradisional: browser tidak akan menyimpan *cache* halaman usang secara paksa. Begitu Anda melakukan push pembaruan di GitHub, Vercel langsung memperbaruinya secara global, dan pengguna akan **langsung melihat tampilan terbaru pada muatan pertama tanpa perlu refresh berkali-kali!**
5.  **Visibility Page Management**
    *   Website secara cerdas memantau aktivitas tab browser Anda. Musik latar belakang (`wedding-music.mp3`) akan otomatis terjeda (*pause*) saat tamu berpindah ke aplikasi/tab lain, dan berlanjut secara otomatis (*resume*) saat tab dibuka kembali, menjaga kenyamanan pengguna.
6.  **Fitur Komponen Undangan Lengkap**
    *   *Hero Section* & Hitung Mundur Pernikahan (*Countdown Timer*) presisi.
    *   Detail Akad Nikah & Resepsi lengkap dengan tautan integrasi Google Calendar.
    *   Cerita Cinta (*Love Story*) interaktif berbasis linimasa waktu.
    *   Galeri Foto & Video dengan transisi *smooth lightbox*.
    *   Buku Tamu / RSVP interaktif terhubung langsung ke basis data Google Sheets Anda.
    *   Amplop Digital (*Digital Envelope*) untuk bank transfer dengan fitur sekali klik salin nomor rekening.
    *   Peta Lokasi Interaktif terintegrasi Google Maps.

---

## 🛠️ Spesifikasi Teknologi

Proyek ini dibangun menggunakan teknologi web modern berkinerja tinggi:

*   **Core**: React.js 18 & TypeScript (Kekuatan pengetikan ketat untuk stabilitas kode).
*   **Build Tool**: Vite (Sangat cepat dalam proses pengembangan HMR dan kompilasi produksi).
*   **Styling & UI**: Tailwind CSS & shadcn/ui (Sistem desain modular untuk glassmorphism premium).
*   **Animation**: Framer Motion (Akselerasi perangkat keras 60FPS untuk transisi halaman dan pergerakan objek).
*   **Icons**: Lucide React (Ikon vektor berkualitas tinggi).
*   **Audio**: HTML5 Audio API dengan kontrol state React terpusat.

---

## 🚀 Panduan Pengembangan Lokal

Ikuti langkah berikut untuk menjalankan proyek ini di komputer Anda:

### Prasyarat
*   Pastikan Anda sudah menginstal **Node.js** (Versi 18 ke atas disarankan) dan pengelola paket **npm** atau **pnpm**.

### Langkah-langkah
1.  **Kloning repositori:**
    ```bash
    git clone https://github.com/Ahmad-munip/rismamawlina.git
    cd rismamawlina
    ```
2.  **Instalasi dependensi:**
    ```bash
    npm install
    # atau jika menggunakan pnpm
    pnpm install
    ```
3.  **Jalankan server pengembangan lokal:**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:8080` di browser Anda.

4.  **Kompilasi build produksi lokal:**
    ```bash
    npm run build
    ```

---

## 📞 Hubungi Kami

Untuk pemesanan undangan digital premium atau kerja sama dengan agensi kami, hubungi:

*   **Developer Agency**: **SAVANNAH Married**
*   **WhatsApp Contact**: [082325036812](https://wa.me/6282325036812)
*   **Tujuan Project**: Risma Mawlina Digital Wedding Invitation Studio

---
*Made with ♥ and dedication by **SAVANNAH Married**.*
