document.addEventListener("scroll", function() {
    const elementos = document.querySelectorAll(".animar");
    const windowHeight = window.innerHeight;

    elementos.forEach(function(elemento) {
        const distanciaTopo = elemento.getBoundingClientRect().top;

        // Se o elemento está dentro da janela de visualização
        if (distanciaTopo < windowHeight - 100) {
            elemento.classList.add("ativo");
        }
    });
});