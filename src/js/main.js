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

  //СЛАЙДЕР СТАТЬИ
  $(function () {
    let owl = $('.article-page__slider');
    owl.owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      onInitialized: counter,
      onTranslated: counter,
    });

    function counter(event) {
      let items = event.item.count;
      let item = event.page.index + 1;
      if (item == 0) {
        item = 1;
      }
      $('.counter').html("<span>" + item + "</span> / " + items)
    }
  });

  //СЛАЙДЕР ПОСТАВЩИКА
  $(function () {
    let owl = $('.provider__feedback-slider');
    owl.owlCarousel({
      loop: true,
      nav:true,
      mergeFit:true,
      responsive : {
        0 : {
          items: 1
        },
        768 : {
          items: 2
        },
        1280 : {
          items: 3
        }
      },
      onInitialized  : counter,
      onTranslated : counter,
    });

    function counter(event) {
      let items = event.item.count;
      let item = event.page.index + 1;
      if (item == 0) {
        item = 1;
      }
      $('.counter').html("<span>" + item + "</span> / " + items)
    }
  });

  //КАРТА
  function initialize() {
    var location = new google.maps.LatLng(59.961183, 30.299698);

    var mapOptions = {
      center: location,
      zoom: 15
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  //МОДАЛЬНОЕ ОПРЕДЕЛЕНИЯ ГОРОДА
  $(function () {
    var open_modal = $('.location__value');
    var close = $('.card__order-btn, .city-modal__overlay');
    var modal = $('.city-modal__overlay');

    open_modal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('href');
      open_modal.fadeIn(400,
        function () {
          $(div)
            .css('display', 'block')
            .animate({opacity: 1}, 200);
        });
    });

    close.click(function () {
      modal
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modal.fadeOut(400);
          }
        );
    });
  });

  //МОДАЛЬНОЕ ВЫБОРА ГОРОДА
  $(function () {
    var open_modal = $('.sort__value');
    var close = $('.sort__overlay, .sort__item-link');
    var modal = $('.sort__overlay');

    open_modal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('href');
      open_modal.fadeIn(400,
        function () {
          $(div)
            .css('display', 'block')
            .animate({opacity: 1}, 200);
        });
    });

    close.click(function () {
      modal
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modal.fadeOut(400);
          }
        );
    });
  });

  //МОДАЛЬНОЕ СОРТИРОВКА
});
