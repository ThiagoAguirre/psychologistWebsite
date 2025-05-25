document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#instaCarousel');

    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000, // Tempo entre slides (5 segundos)
            ride: 'carousel',
            pause: 'hover', // Pausa o carrossel ao passar o mouse
            wrap: true // Permite loop infinito
        });

        console.log('Carrossel inicializado com sucesso!');
    } else {
        console.error('Elemento do carrossel não encontrado. Verifique o HTML.');
    }
});