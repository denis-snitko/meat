document.addEventListener('DOMContentLoaded', () => {

  const elMinusBtn = document.querySelectorAll('.js-minus');
  const elPlusBtn = document.querySelectorAll('.js-plus');
  const elMinusBtnPieces = document.querySelectorAll('.js-minus-pieces');
  const elPlusBtnPieces = document.querySelectorAll('.js-plus-pieces');

  let swiperCart = new Swiper('.swiper-container-cart', {
    slidesPerView: 1,
    // spaceBetween: 60,

    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let itemSwiper = document.querySelectorAll('.swiper-container-wrapper');
  itemSwiper.forEach(swiper => {
    new Swiper(swiper.children, {
      slidesPerView: 1,

      breakpoints: {
        460: {
          slidesPerView: 2,
          spaceBetween: 50,

        },
        576: {
          slidesPerView: 2,
          spaceBetween: 50,

        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
      },

      navigation: {
        nextEl: swiper.querySelector('.swiper-button-next'),
        prevEl: swiper.querySelector('.swiper-button-prev')
      }
    });

    let sMounterThumbs = new Swiper('.swiper-container--thumbs', {
      slidesPerView: 3,
      spaceBetween: 15,
      watchSlidesVisibility: true,
      initialSlide: true,
      // loop: true
    });

    let sMounterProduct = new Swiper('.swiper-container--product', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-p',
        prevEl: '.swiper-button-prev-p',
      },
      thumbs: {
        swiper: sMounterThumbs
      }
    });

  })

  let shopSwiper = new Swiper('.swiper-container-shops', {
    direction: 'vertical',
    slidesPerView: 5,
    allowTouchMove: false,
    navigationHide: true,

    navigation: {
      prevEl: '.p-shops__btn--prev',
      nextEl: '.p-shops__btn--next',
    },
  });

  // COUNTER

  elMinusBtn.forEach(el => {
    el.addEventListener('click', (event) => {
      let input = event.target.nextElementSibling;
      if (input.value == 1) {
        input.value = 1;
      } else {
        input.value = (parseFloat(input.value) - 0.2).toFixed(1);
      }
    })
  })

  elPlusBtn.forEach(el => {
    el.addEventListener('click', (event) => {
      let input = event.target.previousElementSibling;

      input.value = (parseFloat(input.value) + 0.2).toFixed(1);
    })
  })

  elMinusBtnPieces.forEach(el => {
    el.addEventListener('click', (event) => {
      let input = event.target.nextElementSibling;
      if (input.value == 1) {
        input.value = 1;
      } else {
        input.value = (parseFloat(input.value) - 1).toFixed(0);
      }
    })
  })

  elPlusBtnPieces.forEach(el => {
    el.addEventListener('click', (event) => {
      let input = event.target.previousElementSibling;

      input.value = (parseFloat(input.value) + 1).toFixed(0);
    })
  })


  // SUB-MENU HIDE / SHOW
  $('.menu__item--catalog').on('click', () => {
    $('.sub-menu').fadeToggle();
  })
  // -------------------//

  // FILTER HIDE / SHOW
  const filterTrigger = document.querySelectorAll('.filter__sub-title');
  const filterSubTrigger = document.querySelector('.p-assortment__filter-title--trigger');
  const mainFilter = document.querySelector('.p-assortment__filter');

  filterTrigger.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.target.classList.toggle('filter__sub-title--arrow-right')
      event.target.nextElementSibling.classList.toggle('hide-filter-list')
    })
  })

  if (filterSubTrigger) {
    filterSubTrigger.addEventListener('click', () => {
      if (mainFilter.style.display == 'block')
        mainFilter.setAttribute('style', 'display: none')
      else {
        mainFilter.setAttribute('style', 'display: block')
      }
    })
  }
  //---------------//


  // BURGER HIDE / SHOW
  $('.burger-menu__icon').on('click', () => {
    $('.burger-menu__list').show(200);
  })

  $('.burger-menu__close').on('click', () => {
    $('.burger-menu__list').hide(200);
  })
  // -------------------//

  // BURGER CATALOG
  $('.burger-ctalog-trigger').on('click', () => {
    $('.burger__sub-menu').fadeToggle();
  })
  // -------------------//

  // ORDER 
  $(('.p-cart__btn--order')).on('click', () => {
    $('body').attr('style', 'overflow: hidden');
    $('.ordering-block').show(270).attr('style', 'display: flex');
  })

  $(('.ordering-block__close')).on('click', () => {
    $('body').attr('style', 'overflow: auto');
    $('.ordering-block').hide(270);
  })
  //---------------//

  // REGION
  $(('.top-header__region span')).on('click', () => {
    $('.region-popup').fadeToggle(200);
  })
  //-------------------//


  window.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-show-second-sub')) {
      document.querySelector('.sub-menu--right-wrap').setAttribute('style', 'display: flex');
    }
  })


  // BURGER-SUB
  // window.addEventListener('click', (event) => {
  //   if (event.target.classList.contains('js-sub-trigger')) {
  //     if (event.target.nextElementSibling.hasAttribute('style')) {
  //       event.target.nextElementSibling.removeAttribute('style', '')
  //     } else {
  //       event.target.nextElementSibling.setAttribute('style', 'display: block')
  //     }
  //   }
  // })

  $('.js-sub-trigger').on('click', (event) => {
    console.log(event.target);
  })
  //------------------------//

});

$(function () {

  $('.main_slider .slider').owlCarousel({
    items: 1,
    margin: 0,
    nav: true,
    dots: true,
    loop: true,
    smartSpeed: 750,
    autoplay: false,
    autoplayTimeout: 5000,
    onTranslate: function (event) {
      $(event.target).trigger('stop.owl.autoplay')
    },
    onTranslated: function (event) {
      $(event.target).trigger('play.owl.autoplay', [5000])
    },
    onInitialized: function (event) {
      $(event.target).find('.owl-nav .owl-next').css(
        'margin-right', ($(event.target).find('.owl-dots').width() * -1)
      )
    },
    onRefresh: function (event) {
      $(event.target).find('.owl-nav .owl-next').css(
        'margin-right', ($(event.target).find('.owl-dots').width() * -1)
      )
    },
    onResized: function (event) {
      $(event.target).find('.owl-nav .owl-next').css(
        'margin-right', ($(event.target).find('.owl-dots').width() * -1)
      )
    }
  })

  $(".tab__content").hide();
  $(".tab__content:first").show();

  $("ul.tabs__nav li").click(function () {
    let activeTab = $(this).attr("data-tab");

    $(".tab__content").hide();
    $("#" + activeTab).fadeIn();

    $("ul.tabs__nav li").removeClass("tabs__nav--active");
    $(this).addClass("tabs__nav--active");

    $(".tab-accordeon").removeClass("tab-accordeon--active");
    $(".tab-accordeon[data-tab^='" + activeTab + "']").addClass("tab-accordeon--active");
  });

  $('ul#primary-nav').moreMenu();

  $('.mm-menu').click(() => {
    $('.mm-dropdown-menu').fadeToggle();
  })

});

$('.custom-checkbox__base-express').on('click', () => {
  $('.p-cart__order-wrapper--time').hide(200);
  $('.order-details__row').show(200);
  $('.order-details__row--1').show(200);
})

$('.custom-checkbox__base-courier').on('click', () => {
  $('.p-cart__order-wrapper--time').show(200);
  $('.order-details__row').show(200);
  $('.order-details__row--1').show(200);
})

$('.custom-checkbox__base--pickup').on('click', () => {
  $('.p-cart__order-wrapper--time').hide(200);
  $('.order-details__row').hide(200);
  $('.order-details__row--1').hide(200);
})

document.querySelector('.select-wrap select').addEventListener('click', function (event) {
  this.parentNode.classList.toggle('select-wrap--trigger')
})
