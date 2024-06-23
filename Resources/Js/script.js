var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
  });

  // 
  // flip acard 
  $(document).ready(function(){
    $('.flipcard').click(function(e){
    e.preventDefault();
    $(this).toggleClass('flipped');
    })
})