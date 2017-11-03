(function () {
  angular.
    module('indexApp').
    controller('testingController', ['$scope', '$http', '$location', TestingController]);

  function TestingController($scope, $http, $location) {

    $scope.showGender = function () {
      console.log(`Gender: ${$scope.gender}`);
    }
  }
})();
