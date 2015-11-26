(function (_) {

  angular.module('tvshows.controllers', [])
    .controller('TVShowsController', ['$scope', '$routeParams', 'tvshowService', function ($scope, $routeParams, tvshowService) {
      var genre = $routeParams.genre;     

      if(genre)
      {
        $scope.genre = genre;

        tvshowService.byGenre(genre).then(function (data) {
          $scope.tvshows = data;
          $scope.groupped = partition(data, 4);
        });
      }
      else
      {
        tvshowService.all().then(function (data) {
          $scope.tvshows = data;
          $scope.groupped = partition(data, 4);
        });
      }

      function partition(data, n) {
        return _.chain(data).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }

    }])
    .controller('TVShowController', ['$scope', '$routeParams', 'tvshowService', function ($scope, $routeParams, tvshowService) {    
      var id = $routeParams.id;
      $scope.tvshow = {};

      tvshowService.byId(id).then(function (data) {
        $scope.tvshow = data;
      });

    }])  
})(_);
