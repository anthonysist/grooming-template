'use strict';

var barkshack = angular.module('barkApp', []);

barkshack.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
    
    .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'MainCtrl'
      })
    
    .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'MainCtrl'
      })
   
    .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: ''
    })
    .when('/appointment', {
        templateUrl: 'views/appointment.html',
        controller: 'AppointmentCtrl'
    })
    .when('/services/grooming', {
        templateUrl: 'views/services.html',
        controller: 'groomingCtrl',
        activeTab: 'grooming'
    })
    .when('/services/boarding', {
        templateUrl: 'views/services.html',
        controller: 'groomingCtrl',
        activeTab: 'boarding'
    })
    .when('/services/additional', {
        templateUrl: 'views/services.html',
        controller: 'groomingCtrl',
        activeTab: 'additional'
    })
      .otherwise({
        redirectTo: '/'
      });
});

