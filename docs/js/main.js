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

  let swiper = new Swiper('.swiper-container-hero', {
    loop: true,

    navigation: {
      nextEl: '.swiper-hero-button-next',
      prevEl: '.swiper-hero-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
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
  })


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
    console.log('true');
  } else {
    console.log(1);
  }



  // BURGER HIDE / SHOW

  burgerTrigger.addEventListener('click', function (event) {
    this.nextElementSibling.classList.toggle('burger-menu--show')
  })

  // REGION

  regionTrigger.addEventListener('click', () => {
    regionPopup.classList.toggle('region-popup--show')
  })

});