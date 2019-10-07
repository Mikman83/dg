$(document).ready(function() {

  //ВСПЛЫВАЮЩАЯ ШАПКА
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
  $('#gas').change(function(){
    if($(this).is(':checked')) {
      $('.statistics__gaz-block')
        .toggleClass('statistics__gaz-block--active');
      $('.statistics__diz-block')
        .toggleClass('statistics__diz-block--active');
    }
  });

  $('#diz').change(function(){
    if($(this).is(':checked')) {
      $('.statistics__diz-block')
        .toggleClass('statistics__diz-block--active');
      $('.statistics__gaz-block')
        .toggleClass('statistics__gaz-block--active');
    }
  });

  //АККОРДЕОН
  $('.delivery__show-more-btn')
    .click(function(e) {
      e.preventDefault;

      $('.card-page__traders')
        .not($(this).next())
        .toggleClass('card-page__traders-active');

      $(this)
        .next()
        .toggleClass('card-page__traders--active');

      $(this)
        .toggleClass('delivery__show-more-btn--active');
  });
});
