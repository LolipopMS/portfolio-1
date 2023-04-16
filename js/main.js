const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
   delay: 5000,
  },
  spaceBetween: 10,
  loop: true,
});


$(document).ready(function() {
  $('.accordion__item-title').click(function(event) {
    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
});

