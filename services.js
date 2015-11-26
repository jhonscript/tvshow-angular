(function () {

  angular.module('tvshows.services', [])

    .factory('tvshowService', ['$http', '$q', function ($http, $q) {

      function all() {
        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://localhost:8000/tvshows'})
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }

      function byId(id) {
        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://localhost:8000/tvshow/'+id})
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }

      function byGenre(genre) {
        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://localhost:8000/tvshows/'+genre})
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }

      return {
        all: all,
        byId: byId,
        byGenre: byGenre
      };

    }]);

})();
