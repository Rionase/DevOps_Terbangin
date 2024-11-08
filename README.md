# Deskripsi

Terbangin merupakan sebuah web app untuk pemesanan tiket pesawat versi yang telah di update.
Pada branch Terbangin-Docker_build-V1 ini akan berisikan kode lengkap dari web app, database, Dockerfile, dan juga docker-compose. Yang dimana pada branch ini akan dapat dilakukan build image menggunakan docker compose dan juga langsung menjalankan image yang dibuat menjadi container-container dalam satu service.

# Tools

- Python
- docker
- docker compose

# Konfigurasi untuk menjalankan Docker compose

1. Jika belum menginstall Python, silahkan install terlebih dahulu Python. Rekomendasi Python ver. 3.10.11.
2. Jika belum menginstall Docker, silahkan install terlebih dahulu Docker.
3. Jika belum menginstall Docker Compose, silahkan install terlebih dahulu docker compose melalui cmd dengan command "pip install docker-compose".
4. Jalankan terlebih dahulu Docker Desktop.
5. Pull branch ini ke folder local.
6. Masuk ke folder local tersebut melalui terminal, boleh menggunakan cmd, bash, ataupun powershell.
7. Masukkan command "docker compose build --no-cache", maka docker compose akan membuat image dengan tidak ada cache.
8. Masukkan command "docker compose up", maka docker compose akan menjalankannya container-nya.
9. Menunggu sampai proses build dan menjalankan selesai (akan memakan waktu yang cukup lama).
10. Setelah container telah berjalan dengan stabil, silahkan masuk ke browser untuk mengakses http://localhost:5173 (jika data belum tampil, boleh ditunggu beberapa saat karna untuk proses container database sedikit memakan waktu yang lebih lama untuk memasukkan data kedalam database)

# Notes

1. Untuk mengecek python sudah terinstall, bisa langsung menggunakan command "python" di cmd
2. Untuk mengecek docker compose sudah terinstall, bisa langsung menggunakan command "docker compose" di cmd
3. Node modules tidak boleh ada di dalam /BE/app dan /FE/app, hapus saja jika ada
