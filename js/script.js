document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    });
  
    cargarEventListeners();
  });
  
  