(function () {
// Модальное меню при клике на "гамбургер" - только для планшетов и телефонов.
// Само меню работает на якорях каждой из секций страницы.

  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.modal-menu__close');
  const modal = document.querySelector('.modal-menu');
  const links = document.querySelectorAll('modal-menu__link');

  hamburger.addEventListener('click', (evt) => {
    evt.preventDefault;
    modal.style.display = 'block';
  });

  modal.addEventListener('click', (evt) => {
    modal.style.display = 'none';
  });
}());
