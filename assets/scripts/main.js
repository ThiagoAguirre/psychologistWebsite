(function () {
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

    
  let li = document.querySelectorAll(".faq-text li");

  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
      let clickedLi;

      // Identifica o elemento clicado
      if (e.target.classList.contains("question-arrow")) {
        clickedLi = e.target.parentElement;
      } else {
        clickedLi = e.target.parentElement.parentElement;
      }

      // Remove a classe 'showAnswer' de todos os itens
      li.forEach(item => item.classList.remove("showAnswer"));

      // Adiciona a classe ao item clicado
      clickedLi.classList.toggle("showAnswer");
    });
  }

})();
