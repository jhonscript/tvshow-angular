(function () {

  angular.module('tvshows.directives', [])
    
  	.directive('tvshowHeading', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/tvshow-heading.html'
      };
    })

    .directive('tvshowBody', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/tvshow-body.html'
      };
    })

    .directive('tvshowFooter', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/tvshow-footer.html'
      };
    })

})();
