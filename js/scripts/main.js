var slide_thumb = new Swiper(".slide-thumb", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlidesProgress: true
});

var slider_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumb,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });