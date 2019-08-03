var navMain = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');

navMain.classList.add('site-nav--closed');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('site-nav--closed');
});
