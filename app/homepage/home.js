'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'homepage/home.html',
    controller: 'HomePageCtrl'
  });
}])

.controller('HomePageCtrl', [function() {

}]);