angular.module('kingsden').
controller('homeController',["$scope","$http","$rootScope",
    function ($scope,$http,$rootScope) {

      $scope.menuState = true;

      $scope.goBack = function() {
        history.back();
      }
      
      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
        if (toState.name === "home.menu") {
          $scope.menuState = true;        
        } else {
          $scope.menuState = false;
        }
      });

    }
]);
