(function () {

  var app = angular.module('tvshows', [
    'ngRoute',
    'tvshows.controllers',
    'tvshows.directives',
    'tvshows.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/tvshows.html',
        controller: 'TVShowsController'
      })
      .when('/:genre', {
        templateUrl: 'views/tvshows.html',
        controller: 'TVShowsController'
      })
      .when('/tvshow/:id', {
        templateUrl: 'views/tvshow.html',
        controller: 'TVShowController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
