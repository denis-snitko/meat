document.addEventListener('DOMContentLoaded', () => {

  let swiper = new Swiper('.swiper-container-hero', {
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });


  let itemSwiper = document.querySelectorAll('.swiper-container-wrapper');
  itemSwiper.forEach(swiper => {
    new Swiper(swiper.children, {
      slidesPerView: 1,

      breakpoints: {
        400: {
          slidesPerView: 2,
          spaceBetween: 30,
          
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 30,
          
        },
        768: {
          slidesPerView: 4,
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


  const elMinusBtn = document.querySelectorAll('.js-minus');
  const elPlusBtn = document.querySelectorAll('.js-plus');

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

});
