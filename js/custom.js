$(document).ready(function(){

  // sticky menu
  var  mn = $("nav.navbar");
    ns = "nav-scrolled";
    hdr = $('header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(ns);
    } else {
      mn.removeClass(ns);
    }
  });


  // search panel for mobile
  $('.search-btn').click(function() {
    $('.search-panel').toggle('fast');
    $('.search-btn').toggleClass('opened');
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  	navText: ["<i class=\"fa fa-angle-left prev\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right next\" aria-hidden=\"true\"></i>"],
    items:1,
    dots: true,
    dotsData: true
  })
});

// toggle footer menu
$('.footer-header').click(function() {
  var ul = $(this).next(".footer-text");
    if (ul.is(":hidden")) {
        ul.slideDown('fast');
        ul.toggleClass('closed');
    } else {
        ul.slideUp('fast');
        ul.toggleClass('closed')
    }
});

// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.774, lng: -73.945},
    zoom: 14,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: true,
    draggable: true,
    //disableDefaultUI: true,
    styles: [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#0049b0"}]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{"color": "#f2f6fb"}]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{"color": "#777777"}]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#000000"}]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#f2f6fb"}]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{"visibility": "simplified"}]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{"color": "#0049b0"},{"visibility": "on"}]
      }
  ]
  });
};
