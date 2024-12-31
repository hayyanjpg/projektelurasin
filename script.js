// Animasi untuk gambar produk
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('clicked');
        setTimeout(() => {
            card.classList.remove('clicked');
        }, 300); 
    });
});

// Smooth scroll tombol produk sama hubungi kami
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi untuk tombol "Lihat Produk" dan "Hubungi Kami"
document.querySelectorAll('.button-animation').forEach(button => {
    button.addEventListener('click', function (e) {
        // Mencegah default behavior jika diperlukan
        e.preventDefault();

        // Tambahkan class untuk animasi
        this.classList.add('clicked');

        // Hapus class setelah animasi selesai
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);

        // Smooth scroll ke bagian yang dituju
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});