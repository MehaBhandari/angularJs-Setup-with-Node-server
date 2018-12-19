
  var myModule = angular.module("myModule", ['ngRoute']);

  myModule.controller('indexController', ['$scope', indexController]);
  
  myModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexController'
    }).when('/other', {
      templateUrl: 'index/other.vash',
      controller: 'indexController'
    }).otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }]);

  angular.bootstrap(document, ['myModule']);
