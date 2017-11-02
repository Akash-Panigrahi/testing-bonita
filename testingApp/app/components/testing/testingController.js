(function () {
  angular.
    module('indexApp').
    controller('testingController', ['$scope', '$http', '$location', TestingController]);

  function TestingController($scope, $http, $location) {
    let username = 'walter.bates';
    let password = 'bpm';

    $scope.showGender = function () {
      console.log(
        `Username: ${username}
         Password: ${password}
         Gender: ${$scope.gender}`
      );

      let data = "username=" + encodeURIComponent(username) +
        "&password=" + encodeURIComponent(password) +
        "&redirect=true&redirectUrl=loginservice";

      let request = {
        method: 'POST',
        url: 'http://localhost:8080/bonita/loginservice',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      console.log(`Data: ${data}`);

      $http(request).then(
        function () {
          console.log('success');
          // $location.path('/result');
        },
        function () {
          console.log('failure');
        }
      );
    }
  }
})();
