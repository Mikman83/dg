$(document).ready(function() {
  // БУРГЕР
  $('.header__burger')
    .click(function(e) {
      e.preventDefault;

      $('.header__burger')
        .toggleClass('header__burger--active');

      $('.header__wrap')
        .toggleClass('header__wrap--active');
  });

  //КНОПКИ ГАЗ\ДИЗЕЛЬ
  $('.advantages__gaz-btn')
    .click(function(e) {
      e.preventDefault;

      $('.advantages__gaz-btn')
        .toggleClass('advantages__gaz-btn--active');

      $('.advantages__diz-btn')
        .toggleClass('advantages__diz-btn--active');
    });

  $('.advantages__diz-btn')
    .click(function(e) {
      e.preventDefault;

      $('.advantages__diz-btn')
        .toggleClass('advantages__diz-btn--active');

      $('.advantages__gaz-btn')
        .toggleClass('advantages__gaz-btn--active');
    });
});
