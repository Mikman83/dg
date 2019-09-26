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
});
