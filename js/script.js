$(document).ready( () => {

  $('.slick').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next')
  });

  $('.slick2').slick({
    centerMode: true,
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    dots: true,
    prevArrow: $('.arrow-prev2'),
    nextArrow: $('.arrow-next2')
  });








});
