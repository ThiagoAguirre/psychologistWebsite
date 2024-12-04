(function () {
    document.addEventListener("scroll", function () {
        const elementos = document.querySelectorAll(".animar");
        const windowHeight = window.innerHeight;

        elementos.forEach(function (elemento) {
            const distanciaTopo = elemento.getBoundingClientRect().top;

            if (distanciaTopo < windowHeight - 100) {
                elemento.classList.add("ativo");
            }
        });
    });

    $(document).ready(function () {
        $('.toggle-button').on('click', function () {
            const button = $(this);
            const content = button.siblings('.more-text');

            if (content.css('-webkit-line-clamp') === '3' || content.css('max-height') === 'calc(1.5em * 3)') {
                content.css({
                    '-webkit-line-clamp': 'unset',
                    'max-height': 'none'
                });
                button.text('Saiba menos');
            } else {
                content.css({
                    '-webkit-line-clamp': '3',
                    'max-height': 'calc(1.5em * 3)'
                });
                button.text('Saiba mais');
            }
        });
    });
})();
