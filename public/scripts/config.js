require.config({
  paths: {
    angular: '../lib/angular/angular',
    angularRoute: '../lib/angular-route/angular-route',
    main: 'main',
    index: 'index'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  }
});

require(["angularRoute"], function() {
  require(['main', 'indexController', 'homeController', 'myDirective'], function(myModule, indexController, homeController, myDirective) {
    myModule.controller('indexController', ['$scope', indexController]);
    myModule.controller('homeController', ['$scope', homeController]);
    myModule.directive('myDirective', myDirective);
    angular.bootstrap(document, ['myModule']);
  });
});