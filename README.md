# Portal Informasi Kelurahan Bereng Bengkel

Website statis multi-halaman dengan tampilan baru bernuansa hijau, putih, dan aksen emas.

## Halaman
- `index.html` — beranda portal
- `profil.html` — profil wilayah, peta Google Maps, dan akses jalan
- `pemerintahan.html` — struktur pejabat dan pengurus wilayah
- `pendidikan.html` — direktori sekolah
- `sekolah/tk.html`, `sekolah/sd.html`, `sekolah/smp.html` — halaman detail setiap sekolah dengan carousel galeri

## Menjalankan
Buka `index.html` melalui browser atau gunakan VS Code Live Server. Koneksi internet diperlukan untuk Google Fonts, Google Maps, dan peta.

## Menambahkan foto sekolah
Foto sekolah asli belum tersedia di arsip yang dikirim. Untuk mengisi galeri, siapkan tiga foto per sekolah dengan nama berikut:
- `assets/images/schools/tk-1.jpg`, `tk-2.jpg`, `tk-3.jpg`
- `assets/images/schools/sd-1.jpg`, `sd-2.jpg`, `sd-3.jpg`
- `assets/images/schools/smp-1.jpg`, `smp-2.jpg`, `smp-3.jpg`

Halaman detail telah menyediakan carousel tiga slide. Saat foto sekolah sudah ada, area placeholder dapat diganti dengan foto tersebut. Jangan menggunakan foto ilustrasi sebagai dokumentasi sekolah.

## Data
Nama, NPSN, kontak, dan foto pejabat yang tersedia dipertahankan dari arsip awal. Detail statistik sekolah yang belum terverifikasi tidak diisi dengan angka rekaan. Tautan resmi sekolah dapat diperbarui jika URL SMP yang benar berbeda dari URL SD.
