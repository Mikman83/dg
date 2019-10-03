$(document).ready(function() {

  let header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if ( scrolled > 20 && scrolled > scrollPrev ) {
      header.addClass('header__nav-up');
    } else {
      header.removeClass('header__nav-up');
    }
    scrollPrev = scrolled;
  });


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
  // $('.advantages__gaz-btn')
  //   .click(function(e) {
  //     e.preventDefault;
  //
  //     $('.advantages__gaz-btn')
  //       .toggleClass('advantages__gaz-btn--active');
  //
  //     $('.advantages__diz-btn')
  //       .toggleClass('advantages__diz-btn--active');
  //   });
});
