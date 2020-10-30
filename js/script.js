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


//// Variables ////
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
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');
////

plus.addEventListener('click', () => {
  number++;
  num.innerHTML = number;
});

minus.addEventListener('click', () => {
  number > 1 ? number-- : '';
  num.innerHTML = number;
});


const toggleClass = (el, cl) => {
  el.classList.contains(cl) ? el.classList.remove(cl) : el.classList.add(cl);
}

saveBtn.addEventListener('click', () => {
  toggleClass(heartFull, 'hide');
  toggleClass(heart, 'hide');
  toggleClass(likedItems, 'hide');
  toggleClass(noLikes, 'hide');
});


cart.addEventListener('click', () => {
  shoppingNum++;
  shoppingItems.innerHTML = shoppingNum;
  shoppingItems.style.display = 'block';
});


searchIcon.addEventListener('click', () => {
  toggleClass(searchForm, 'hide');
  toggleClass(searchForm, 'animated-search-form');
  toggleClass(searchInput, 'animated-search-input');
  searchInput.value = '';
});


////Test search button click
const btnSubmit = () => {
  alert(searchInput.value);
}
