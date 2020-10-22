$(document).ready( () => {


  // FIRST SLIDER IN *LIVING ROOM* //
  $('.slick').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next')
  });

  // SECOND SLIDER IN *LIVING ROOM* //
  $('.slick2').slick({
    centerMode: true,
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    dots: true,
    prevArrow: $('.arrow-prev2'),
    nextArrow: $('.arrow-next2')
  });

  // SLIDE PREVIEW IN *ADDA SOFA* //
  $('.slide-preview').slick({
    arrows: false,
    fade: true,
    dots: true
  });







});
