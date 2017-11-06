(function () {
  angular.
    module('indexApp').
    controller('testingController', ['$scope', '$http', '$location', '$routeParams', TestingController]);

  function TestingController($scope, $http, $location, $routeParams) {

    let processid = $routeParams.id;
    console.log(processid);

    $http.get('/API/living/application-page/5780412811614537304').then(function () {
      console.log('success');
    });

    $scope.showGender = function () {
      console.log(`Gender: ${$scope.gender}`);
    }
  }
})();
