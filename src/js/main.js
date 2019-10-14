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
    var close = $('.card__order-btn, .city-modal__overlay, .cities-modal__overlay');
    var closeCities = $('.card__order-btn, .cities-modal__overlay');
    var modal = $('.city-modal__overlay');
    var modalCities = $('.cities-modal__overlay');

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

    closeCities.click(function () {
      modalCities
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modal.fadeOut(400);
          }
        );
    });
  });

  //МОДАЛЬНОЕ СОРТИРОВКА
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

  //МОДАЛЬНОЕ ОТПРАВИТЬ ЗАЯВКУ
  $(function () {
    var open_modal = $('.lead-block__btn');
    var close = $('.request-modal__close');
    var modal = $('.request-modal');

    open_modal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('data-link');
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

  $('.request-modal__input').focus(function () {
    $(this).parent().css('border', '1px solid rgba(24, 195, 244, 0.29)');
  });

  $('.request-modal__input').blur(function () {
    if($(this).hasClass("error")) {
      $(this).parent().css('border', '1px solid #f14040');
    } else {
      $(this).parent().css('border', '1px solid #e5e5e5');
    }
  });

  var form = $(".request-modal__form");
  $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
  });
  $.validator.addMethod("checkTel", function(value, element) {
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g.test(value);
  });
  form.validate({
    rules: {
      company: {
        required: true,
        minlength: 3,
        letters: true
      },
      tel: {
        required: true,
        checkTel: true
      }
    },
    messages: {
      company: "Неправильно введена инфо или не заполнено поле",
      tel: "Неправильно введена инфо или не заполнено поле"
    },
    submitHandler: function() {}
  });


});
