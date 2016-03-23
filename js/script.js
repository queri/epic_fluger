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

// var newVal = $('a.js-modal-room').data('rooms-type');

$('a.js-modal-room').on('click', function(){
  var roomType = $(this).data('rooms-type');
  $('#room-type-modal .js-room-select option[selected]')
    .removeAttr('selected');
  $('#room-type-modal')
    .modal('show')
    .find('.js-room-select option[value="'+roomType+'"]')
    .attr('selected',"selected");
});

$('a.js-modal').on('click', function(){
  $('#total-modal').modal('show');
});

var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler-close');
    document.getElementById('nav').classList.toggle('mobile-nav-visible');
  }


  var owl = $('#carousel-hall');
  owl.owlCarousel({
    'items':8,
    'loop':true,
    'margin':5,
    'merge':true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
        'mergeFit':true
      },
      400:{
        'items': 3,
        'center': true,
        'mergeFit':true
      },
      500:{
        'items': 4,
        'center': true,
        'mergeFit':true
      },
      678:{
        'items': 5,
        'center': true,
        'loop':true,
        'mergeFit':true
      },
      900:{
        'center': false,
        'mouseDrag': true,
      },
      1100:{
        'mouseDrag': true,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-kitchen');
  owl.owlCarousel({
    'items':'all',
    'loop':true,
    'margin':5,
    'merge':true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
        'mergeFit':true
      },
      400:{
        'items': 3,
        'center': true,
        'mergeFit':true
      },
      500:{
        'items': 4,
        'center': true,
        'mergeFit':true
      },
      678:{
        'items': 5,
        'center': true,
        'mergeFit':true
      },
      1000:{
        'mouseDrag': false,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-toilet');
  owl.owlCarousel({
    'items':'all',
    'loop':true,
    'margin':5,
    'merge':true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
        'mergeFit':true
      },
      400:{
        'items': 3,
        'center': true,
        'mergeFit':true
      },
      500:{
        'items': 4,
        'center': true,
        'mergeFit':true
      },
      678:{
        'items': 5,
        'center': false,
        'mergeFit':true
      },
      1000:{
        'mouseDrag': false,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-12_room');
  owl.owlCarousel({
    'items':'all',
    'loop':true,
    'margin':5,
    'merge':true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
        'mergeFit':true
      },
      400:{
        'items': 3,
        'center': false,
        'mergeFit':true
      },
      500:{
        'items': 4,
        'center': false,
        'mergeFit':true
      },
      678:{
        'items': 5,
        'center': false,
        'mergeFit':true
      },
      1000:{
        'mouseDrag': false,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-6_room');
  owl.owlCarousel({
    'items':'all',
    'loop':true,
    'margin':5,
    'merge':true,
    'itemsScaleUp': true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
        'mergeFit':false
      },
      400:{
        'items': 3,
        'center': true,
        'mergeFit':false
      },
      500:{
        'items': 4,
        'loop':true,
        'center': false,
        'mergeFit':false
      },
      678:{
        'items': 9,
        'center': false,
        'loop':false,
        'mergeFit':false
      },
      990:{
        'center': false,
        'mouseDrag': false,
      },
      1100:{
        'mouseDrag': false,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-2_room');
  owl.owlCarousel({
    'items':'all',
    'loop':true,
    'margin':5,
    'merge':true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
      },
      400:{
        'items': 3,
        'center': true,
      },
      500:{
        'items': 4,
        'center': false,
      },
      678:{
        'items': 7,
        'center': false,
        'mergeFit':true
      },
      990:{
        'center': false,
        'mouseDrag': false,
      },
      1100:{
        'mouseDrag': false,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-lux');
  owl.owlCarousel({
    'items':'all',
    'loop':true,
    'margin':5,
    'merge':true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
      },
      400:{
        'items': 3,
        'center': true,
      },
      500:{
        'items': 4,
        'center': true,
      },
      678:{
        'items': 10,
        'loop':true,
        'mergeFit':true
      },
      990:{
        'center': false,
        'mouseDrag': false,
      },
      1100:{
        'mouseDrag': false,
        'mergeFit':false
      }
    }
  });

  var owl = $('#carousel-roof');
  owl.owlCarousel({
    'items':'all',
    'margin':5,
    'loop': true,
    'merge': true,
    'responsive':{
      320:{
        'items': 2,
        'center': true,
      },
      400:{
        'items': 3,
        'center': true,
      },
      500:{
        'items': 4,
        'center': false,
      },
      678:{
        'items': 5,
        'center': false,
        'mergeFit':true
      },
      990:{
        'center': false,
        'mouseDrag': false,
      },
      1100:{
        'mergeFit':false,
        'mouseDrag': false,
      }
    }
  });


});