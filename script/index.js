$(function () { 
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  
  $(".single-item").slick({
    infinite: true,
    speed: 800,
    autoplay: true,
  });

  
});
