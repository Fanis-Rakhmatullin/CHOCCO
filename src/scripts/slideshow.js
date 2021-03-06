(function () {
// Функция, находящая в списке reviews__list item соответствующий
// интерактивному аватару:
  const findBlockByDataAttr = (alias) => $('.reviews__item').filter((ndx, item) => $(item).attr('data-linked-with') == alias);

  $('.interactive-avatar__link').on('click', (e) => {
    e.preventDefault();

    const $clicked = $(e.currentTarget);

    // Дата-атрибут интерактивного аватара (one, two или three)
    const linker = $clicked.attr('data-open');

    // Находим item с дата-атрибутом соответствующим атрибуту
    // того элемента, на который произошел клик
    const itemToShow = findBlockByDataAttr(linker);

    const curItem = $clicked.closest('.reviews__switcher-item');

    itemToShow.addClass('active').siblings().removeClass('active');
    curItem.addClass('active').siblings().removeClass('active');
  });
}());
