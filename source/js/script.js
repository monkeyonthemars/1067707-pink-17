var navMain = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');
var navMenuBurger = document.querySelector('.site-nav__menu-burger');
var navMenuCross = document.querySelector('.site-nav__menu-cross');


navMain.classList.add('site-nav--closed');
navMenuCross.classList.add('visually-hidden');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('site-nav--closed');
  navMenuBurger.classList.toggle('visually-hidden');
  navMenuCross.classList.toggle('visually-hidden');
});
