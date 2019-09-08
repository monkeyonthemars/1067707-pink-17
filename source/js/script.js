var navMain = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');
var header = document.querySelector('.site-header');
var mapMarker = document.querySelector('.contacts__map-marker');
var contacts = document.querySelector('.contacts');


navToggle.classList.remove("visually-hidden");

navMain.classList.add('site-nav--closed');
header.classList.add('site-header--closed');
navToggle.classList.add('site-nav__toggle--cross-hidden');
if (mapMarker) {
  contacts.classList.add('contacts--map-hidden');
}

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('site-nav--closed');
  header.classList.toggle('site-header--closed');
  navToggle.classList.toggle('site-nav__toggle--burger-hidden');
  navToggle.classList.toggle('site-nav__toggle--cross-hidden');
});

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
    iconImageOffset: [-18, -5]
  });

  map.geoObjects
    .add(myPlacemark);
});
