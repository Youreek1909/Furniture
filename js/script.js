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

let number = document.querySelector('.num').innerHTML;
let num = document.querySelector('.num');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
const saveBtn = document.querySelector('.sofaPreview__buttons--save');
const heart = document.querySelector('.heart');
const heartFull = document.querySelector('.heart-full');
const cart = document.querySelector('.sofaPreview__cta--add');
let shoppingItems = document.querySelector('.shopping-items');
let shoppingNum = document.querySelector('.shopping-items').innerHTML;
const likedItems = document.querySelector('.liked-items');
const noLikes = document.querySelector('.no-likes');


plus.addEventListener('click', () => {
  number++;
  num.innerHTML = number;
});

minus.addEventListener('click', () => {
  number > 1 ? number-- : '';
  num.innerHTML = number;
});


saveBtn.addEventListener('click', () => {
  if(heartFull.style.display === 'none') {
    heartFull.style.display = 'inline-block';
    heart.style.display = 'none';
    likedItems.style.display = 'inline-block';
    noLikes.style.display = 'none';
  } else {
    heartFull.style.display = 'none';
    heart.style.display = 'inline-block';
    likedItems.style.display = 'none';
    noLikes.style.display = 'inline-block';
  }
});

cart.addEventListener('click', () => {
  shoppingNum++;
  shoppingItems.innerHTML = shoppingNum;
  shoppingItems.style.display = 'block';
});
