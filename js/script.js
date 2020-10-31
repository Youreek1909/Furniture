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


//// Variables ///////////////////////////////////////
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
const shoppingIcon = document.querySelector('.shopping-icon');
const shoppingList = document.querySelector('.shopping__list');
const shoppingLink = document.querySelector('.shopping__link');
const deleteBtn = document.querySelector('.shopping__list--delete-btn');
////////////////////////////////////////////////////////


///// plus button
plus.addEventListener('click', () => {
  number++;
  num.innerHTML = number;
});

///// minus button
minus.addEventListener('click', () => {
  number > 1 ? number-- : '';
  num.innerHTML = number;
});

///// function toggle class
const toggleClass = (el, cl) => {
  el.classList.contains(cl) ? el.classList.remove(cl) : el.classList.add(cl);
}

///// button save items
saveBtn.addEventListener('click', () => {
  toggleClass(heartFull, 'hide');
  toggleClass(heart, 'hide');
  toggleClass(likedItems, 'hide');
  toggleClass(noLikes, 'hide');
});

///// search icon show
searchIcon.addEventListener('click', () => {
  toggleClass(searchForm, 'hide');
  toggleClass(searchForm, 'animated-search-form');
  toggleClass(searchInput, 'animated-search-input');
  searchInput.value = '';
});


////Test search button click//////////////////////////////////
const btnSubmit = () => {
  alert(searchInput.value);
}

////cart functionality ///////////////////////////////////////
const cartItem = () => {
  let markup = `
  <a href="#" class="shopping__link">
    <div class="shopping__list--items">
      <div class="shopping__list--name">
        <p>Adda parisian sofa</p>
      </div>
      <div class="shopping__list--picture">
        <img src="img/img-6.jpg" alt="Picture">
      </div>
      <div class="shopping__list--delete">
        <button class="shopping__list--delete-btn">
          <i class="fas fa-times delete-item"></i>
        </button>
      </div>
    </div>
  </a> `;
  shoppingList.insertAdjacentHTML('beforeend', markup);
};

///// add items to the cart
cart.addEventListener('click', () => {
  shoppingNum++;
  shoppingItems.innerHTML = shoppingNum;
  shoppingItems.style.display = 'block';
  cartItem();
  console.log(deleteBtn);
});


////open cart list only if there is some item
shoppingIcon.addEventListener('click', () => {
  if(shoppingNum >= 1) {
    toggleClass(shoppingList, 'hide');
  }
});


////// hide cart list on mouse leave
shoppingList.addEventListener('mouseleave', () => {
  toggleClass(shoppingList, 'hide');
});


//// delete item from the cart
