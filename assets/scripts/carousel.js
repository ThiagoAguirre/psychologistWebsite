// Carrossel JS para substituir animação CSS
// Adicione este arquivo ao seu projeto e inclua no HTML

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel__item');
    const total = items.length;
    let current = 0;
    const interval = 4000; // 3 segundos por item

    // Adiciona transição suave
    items.forEach(item => {
        item.style.transition = 'opacity 0.5s, transform 0.5s';
    });

    function showItem(index) {
        items.forEach((item, i) => {
            // Reset estilos
            item.style.opacity = '0';
            item.style.transform = 'translateY(100%) scale(0.5)';
            item.style.visibility = 'hidden';
            item.style.zIndex = '0';
        });
        // Item atual
        items[index].style.opacity = '1';
        items[index].style.transform = 'translateY(0) scale(1)';
        items[index].style.visibility = 'visible';
        items[index].style.zIndex = '2';
        // Item anterior
        const prev = (index - 1 + total) % total;
        items[prev].style.opacity = '0.4';
        items[prev].style.transform = 'translateY(-100%) scale(0.7)';
        items[prev].style.visibility = 'visible';
        items[prev].style.zIndex = '1';
        // Item próximo
        const next = (index + 1) % total;
        items[next].style.opacity = '0.4';
        items[next].style.transform = 'translateY(100%) scale(0.7)';
        items[next].style.visibility = 'visible';
        items[next].style.zIndex = '1';
    }

    function nextItem() {
        current = (current + 1) % total;
        showItem(current);
    }

    // Inicializa o carrossel
    showItem(current);
    setInterval(nextItem, interval);
});
