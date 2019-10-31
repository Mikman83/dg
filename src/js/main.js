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

      $('body').toggleClass('no-scroll');

      if($('body').hasClass('no-scroll')) {
        $("body").css({
          'height' : '100%',
          'width' : '100%',
          'position' : 'fixed',
          'overflow' : 'hidden'
        });
      }else{
        $("body").removeAttr("style");
      }

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
    var openModal = $('.location__value');
    var close = $('.card__order-btn, .city-modal__overlay, .cities-modal__overlay');
    var closeCities = $('.card__order-btn, .cities-modal__overlay');
    var modal = $('.city-modal__overlay');
    var modalCities = $('.cities-modal__overlay');

    openModal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('href');
      openModal.fadeIn(400,
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
    var openModal = $('.sort__value');
    var close = $('.sort__overlay, .sort__item-link');
    var modal = $('.sort__overlay');

    openModal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('href');
      openModal.fadeIn(400,
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
    var openModal = $('.lead-block__btn');
    var openThx = $('.request-modal__btn');
    var closeRequest = $('.request-modal__close, .request-modal__btn');
    var closeThx = $('.success-modal__close');
    var modal = $('.request-modal');
    var modalThx = $('.modals__success');
    var error = $('.request-modal__fieldset .error');

    openModal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('data-link');
      openModal.fadeIn(400,
        function () {
          $(div)
            .css('display', 'block')
            .animate({opacity: 1}, 200);
        });
    });

    openThx.click(function (event) {
      if(!error) {
        $(this).attr('disabled', 'disabled');
      } else {
        $(this).removeAttr('disabled');
        event.preventDefault();
        var div = $(this).attr('data-success');
        openThx.fadeIn(400,
          function () {
            $(div)
              .css('display', 'block')
              .animate({opacity: 1}, 200);
          });
      }
    });

    closeRequest.click(function () {
      modal
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modal.fadeOut(400);
          }
        );

      setTimeout(closeThxModal, 3000);
    });

    function closeThxModal() {
      modalThx
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modalThx.fadeOut(400);
          }
        );
    }

    closeThx.click(closeThxModal);
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
    return this.optional(element) || value == value.match(/^[a-zA-Z а-яА-ЯёЁ'"`]*$/);
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

  //МОДАЛЬНОЕ ОКНО ПОДРОБНОГО ОТЗЫВА
  $(function () {
    var openModal = $('.feedback__details-link');
    var close = $('.review-page__close');
    var modal = $('.review-page');

    openModal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('href');
      openModal.fadeIn(400,
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

  //МОДАЛЬНОЕ ОКНО ОТЗЫВА
  $(function () {
    var openModal = $('.card__order-btn');
    var close = $('.feedback-modal__close, .request-modal__btn');
    var modal = $('.feedback-modal');
    var modalThx = $('.feedback-thx');
    var closeThx = $('.feedback-thx__close');

    openModal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('data-link');
      openModal.fadeIn(400,
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

      setTimeout(closeThxModal, 3000);
    });

    function closeThxModal() {
      modalThx
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modalThx.fadeOut(400);
          }
        );
    }

    closeThx.click(closeThxModal);
  });

  //МОДАЛЬНОЕ ОКНО ЗАКАЗА
  $(function () {
    var openModal = $('.card__order-btn');
    var openThx = $('.lead-modal__btn');
    var closeRequest = $('.lead-modal__close, .lead-modal__btn');
    var closeThx = $('.success-modal__close');
    var modal = $('.lead-modal');
    var modalThx = $('.modals__success');
    var error = $('.lead-modal__fieldset .error');

    openModal.click(function (event) {
      event.preventDefault();
      var div = $(this).attr('data-link');
      openModal.fadeIn(400,
        function () {
          $(div)
            .css('display', 'block')
            .animate({opacity: 1}, 200);
        });
    });

    openThx.click(function (event) {
      if(!error) {
        $(this).attr('disabled', 'disabled');
      } else {
        $(this).removeAttr('disabled');
        event.preventDefault();
        var div = $(this).attr('data-success');
        openThx.fadeIn(400,
          function () {
            $(div)
              .css('display', 'block')
              .animate({opacity: 1}, 200);
          });
      }
    });

    closeRequest.click(function () {
      modal
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modal.fadeOut(400);
          }
        );

      setTimeout(closeThxModal, 3000);
    });

    function closeThxModal() {
      modalThx
        .animate({opacity: 0}, 200,
          function () {
            $(this).css('display', 'none');
            modalThx.fadeOut(400);
          }
        );
    }

    closeThx.click(closeThxModal);
  });

  $('.lead-modal__input').focus(function () {
    $(this).parent().css('border', '1px solid rgba(24, 195, 244, 0.29)');
  });

  $('.lead-modal__input').blur(function () {
    if($(this).hasClass("error")) {
      $(this).parent().css('border', '1px solid #f14040');
    } else {
      $(this).parent().css('border', '1px solid #e5e5e5');
    }
  });

  var form = $(".lead-modal__form");
  $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z а-яА-ЯёЁ'"`]*$/);
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

//РЕЙТИНГ
let starParts = [...document.querySelectorAll("input[name='rating']")];
let rating = 0;
let realValue = 0;
// rate.innerHTML = "Показывается: " + rating / 2 + "<br>Реально: " + realValue;

// let res = document.getElementById("#rate");
starParts.forEach(function(item, idx) {
  item.addEventListener("change", function(e) {
    let selectedIndex = idx;
    rating = selectedIndex + 1;
    realValue = item.value;
    // rate.innerHTML = "Показывается: " + rating / 2 + "<br>Реально: " + realValue;

    starParts.forEach(function(item, idx) {
      if (idx <= selectedIndex) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  });
});

// ТАЙМЕР
$(function () {
  const time = $('.direct-modal__seconds');
  timerDecrement();

  function timerDecrement() {
    setTimeout(function() {
      const newTime = time.text() - 1;

      time.text(newTime);

      if(newTime > 0) timerDecrement();
    }, 1000);
  }
})

