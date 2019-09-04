var navMain = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');
var navMenuBurger = document.querySelector('.site-nav__menu-burger');
var navMenuCross = document.querySelector('.site-nav__menu-cross');
var header = document.querySelector('.site-header');
var mapMarker = document.querySelector('.contacts__map-marker');

navMain.classList.add('site-nav--closed');
header.classList.add('site-header--closed');
navMenuCross.classList.add('visually-hidden');
if (mapMarker) {
  mapMarker.classList.add('visually-hidden');
}

navToggle.addEventListener('click', function() {
  console.log("hi")
  navMain.classList.toggle('site-nav--closed');
  header.classList.toggle('site-header--closed');
  navMenuBurger.classList.toggle('visually-hidden');
  navMenuCross.classList.toggle('visually-hidden');
});

//

ymaps.ready(function(){
  var map = new ymaps.Map(document.querySelector(".contacts__interactive-map"), {
    center: [59.936600, 30.321100],
    zoom: 16,
    controls: []
  });

  map.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([59.936600, 30.321100], {}, {
    iconLayout: 'default#image',
    iconImageHref: "img/icon-map-marker.svg",
    iconImageSize: [35.983, 35.983],
    iconImageOffset: [-18, 12]
  });

  map.geoObjects
    .add(myPlacemark);
});
