document.addEventListener('DOMContentLoaded', () => {



  const elMinusBtn = document.querySelectorAll('.js-minus');

  const elPlusBtn = document.querySelectorAll('.js-plus');

  const subMenuTrigger = document.querySelector('.menu__item--catalog');

  const filterTrigger = document.querySelectorAll('.filter__sub-title');

  const filterSubTrigger = document.querySelector('.p-assortment__filter-title--trigger');
  const mainFilter = document.querySelector('.p-assortment__filter');

  const burgerTrigger = document.querySelector('.burger-menu__icon');

  const regionTrigger = document.querySelector('.top-header__region span');
  const regionPopup = document.querySelector('.region-popup');

  const orderTrigger = document.querySelector('.p-cart__btn--order');
  const orderPopUp = document.querySelector('.ordering-block');
  const orderClose = document.querySelector('.ordering-block__close');


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
      // spaceBetween: 60,

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

  // COUNTER

  elMinusBtn.forEach(el => {
    el.addEventListener('click', (event) => {
      let input = event.target.nextElementSibling;
      if (input.value == 1) {
        input.value = 1;
      } else {
        input.value--;
      }
    })
  })

  elPlusBtn.forEach(el => {
    el.addEventListener('click', (event) => {
      let input = event.target.previousElementSibling;
      input.value++;
    })
  })

  // SUB-MENU HIDE / SHOW

  subMenuTrigger.addEventListener('click', (event) => {
    event.target.querySelector('.sub-menu').classList.toggle('sub-menu--show')
  })

  // FILTER HIDE / SHOW

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



  // BURGER HIDE / SHOW

  burgerTrigger.addEventListener('click', function (event) {
    this.nextElementSibling.classList.toggle('burger-menu--show')
  })

  // REGION

  regionTrigger.addEventListener('click', () => {
    regionPopup.classList.toggle('region-popup--show')
  })

  // OFFER 

  orderTrigger.addEventListener('click', () => {
    document.querySelector('body').setAttribute('style', 'overflow: hidden')
    orderPopUp.setAttribute('style', 'display: flex')
  })

  orderClose.addEventListener('click', () => {
    document.querySelector('body').setAttribute('style', 'overflow: auto')
    orderPopUp.setAttribute('style', 'display: none')
  })

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

});

$('ul#primary-nav').moreMenu();