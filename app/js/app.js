require('angular/angular');
require('angular-route/angular-route');

// Create your app
angular.module('myApp', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  // Specify routes to load our partials upon the given URLs
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);