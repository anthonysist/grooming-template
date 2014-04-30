'use strict';

barkshack.controller('HeaderCtrl', function($scope, $location) {
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
          return "active"
        } else {
          return ""
        }
    };
    
    $scope.toggleNav = function($scope) {
        if ($('#navbar').hasClass('in')) {
            $('#navbar').collapse('hide');
        }
    };  
    
    $scope.getLocation = function($scope) {
        var locationMarker = null;
        if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition(
                function( position ){

                if (locationMarker){
                    return;
                }

                var currentLat = position.coords.latitude;
                var currentLong = position.coords.longitude;
                                    
                var url = 'https://maps.google.com/maps?saddr=' + currentLat + ',' + currentLong + '&daddr=Table Rock State Park Rd, Pickens, SC 29671';

                window.open(
                  url
                );


                },
                function( error ){
                    console.log( "Something went wrong: ", error );
                },
                {
                    timeout: (5 * 10000),
                    maximumAge: (1000 * 60 * 15),
                    enableHighAccuracy: true
                }
            );
        }  
    };
});

barkshack.controller('MainCtrl', function ($scope) {
         
    var mapDiv = $('#map').is(':visible'); 
      
    if(mapDiv){
        var styles = [
        {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
                { hue: '#8E887D' },
                { saturation: -74 },
                { lightness: -41 },
                { visibility: 'on' }
            ]
        },
        { 
            featureType: 'water', 
            elementType: 'all', 
            stylers: [ 
                { hue: '#002D56' }, 
                { saturation: -54 }, 
                { lightness: -9 }, 
                { visibility: 'on' } 
            ] 
        }
    ];
        
    var options = {
        mapTypeControlOptions: {
            mapTypeIds: [ 'Styled']
        },
        center: new google.maps.LatLng(32.2305004,-80.8568941),
        zoom: 16,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
      
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.2305004,-80.8568941),
          map: map,
          title: 'Grooming Place',
          icon: 'images/marker.png'
      });
    }
    
  });

barkshack.controller('GalleryCtrl', function($scope, $http, instagrams) {
    //Need to get the instagram feed
    instagrams.fetchPopular(function(data){
        
		$scope.instagrams = data;
        
        
	});
});



barkshack.controller('groomingCtrl', function ($scope,$route) {

    $scope.$route = $route;
    
    var activeContent = '#' + $route.current.activeTab;
    
    $('.tab-pane').removeClass('active');
    
    $(activeContent).addClass('active');
   
    $scope.breeds = [
     {
      name: "Airedale",
      price: "$60",
          },
      {
      name: "Akita",
      price: "$65",
    },
       {
      name: "Austrailian Sheep Dog",
      price: "$50", 
    },
     {
      name: "Bernese Mountain Dog",
      price: "$65", 
    },
    {
      name: "Bichon",
      price: "$50",
    },
     {
      name: "Border Collie",
      price: "$50",
    },
     {
      name: "Border Terrier",
      price: "$45",
    },
     {
      name: "Boykin",
      price: "$50",
    },
     {
      name: "Brittany",
      price: "$50",
    },
     {
      name: "Bouvier",
      price: "$65",
    },
     {
      name: "Cairn",
      price: "$45",
    },
     {
      name: "Cavalier",
      price: "$55",
    },
     {
      name: "Chow",
      price: "$60",
    },
     {
      name: "Cockapoo",
      price: "$50",
    },
     {
      name: "Cocker",
      price: "$50",
    },
     {
      name: "Corgi",
      price: "$45",
    },
     {
      name: "English Setter",
      price: "$50",
    },
     {
      name: "Eskimo Spitz",
      price: "$50",
    },
     {
      name: "German Shephard",
      price: "$55",
    },
     {
      name: "Golden Retriever",
      price: "$50",
    },
     {
      name: "Golden Doodle",
      price: "$65",
    },
     {
      name: "Great Pyrenese",
      price: "$55",
    },
     {
      name: "Irish Setter",
      price: "$50",
    },
     {
      name: "Japanese Chin",
      price: "$40",
    },
     {
      name: "Keeshond",
      price: "$50",
    },
     {
      name: "Labrador Retriever",
      price: "$50",
    },
     {
      name: "Lhasa Apso",
      price: "$45",
    },
     {
      name: "Maltese",
      price: "$40",
    },
     {
      name: "Newfoundland",
      price: "$65",
    },
     {
      name: "Norfolk Terrier",
      price: "$45",
    },
     {
      name: "Old English Sheepdog",
      price: "$65",
    },
     {
      name: "Newfoundland",
      price: "$40",
    },
     {
      name: "Pekignese",
      price: "$45",
    },
     {
      name: "Toy Poodle",
      price: "$40",
    },
     {
      name: "Miniature Poodle",
      price: "$40",
    },
     {
      name: "Standard Poodle",
      price: "$65",
    },
     {
      name: "Samoyed",
      price: "$55",
    },
     {
      name: "Miniature Scnauzer",
      price: "$45",
    },
     {
      name: "Standard Scnauzer",
      price: "$50",
    },
     {
      name: "Giant Scnauzer",
      price: "$60",
    },
     {
      name: "Scottish Terrier",
      price: "$45",
    },
     {
      name: "Sheltie",
      price: "$50",
    },
     {
      name: "Shih Tzu",
      price: "$45",
    },
     {
      name: "Springer Spaniel",
      price: "$50",
    },
     {
      name: "Saint Bernard",
      price: "$65",
    },
     {
      name: "Tibetan Terrier",
      price: "$45",
    },
     {
      name: "Welsh Terrier",
      price: "$45",
    },
     {
      name: "Westie",
      price: "$45",
    },
     {
      name: "Wheaton Terrier",
      price: "$60",
    },
     {
      name: "Yorkie",
      price:"$45",
    },
  ];
 
    $scope.price = '$0';
    $scope.breed = 'Please choose your breed'
        
    $scope.setBreed = function (breed) {
        $scope.price = breed.price;
        $scope.breed = breed.name;
      };
        
});
  