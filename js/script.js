$(document).ready(function() {
  //fancybox
  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });



  // map
  var points = [
  {lat: 59.9322195, lng: 30.3241536},
];

var images = [
  '../img/icon-map.png',
];

$.ajax({
  url: 'https://maps.googleapis.com/maps/api/js',
    dataType: 'jsonp',
  jsonp: 'callback',
  success: mapInit
});

function mapInit() {
  var map = new google.maps.Map($('#map').get(0), {
    center: {lat: 59.9322195, lng: 30.3241536},
    zoom: 16,
    //disableDefaultUI: true,
    scrollwheel: false, // убираем скролл колесом
  });

  var markers = [];

  points.forEach(function (position, i) {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      icon: images[i]
    }));
  });
}

//modal

var newVal = $('a.js-modal-room').data('rooms-type');
$('a.js-modal-room').on('click', function(){
    $('#room-type-modal').modal('show').find('.js-room').val(newVal);
  })



  $('a.js-modal').on('click', function(){
    $('#total-modal').modal('show');
  });

  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler-close');
    document.getElementById('nav').classList.toggle('mobile-nav-visible');
  }

});