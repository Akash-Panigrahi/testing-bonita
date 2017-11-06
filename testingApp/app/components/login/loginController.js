(function () {
  angular.
    module('indexApp').
    controller('loginController', ['$scope', '$http', '$location', '$cookies', LoginController]);

  function LoginController($scope, $http, $location, $cookies) {

    $scope.login = function () {
      let username = $scope.username;
      let password = $scope.password;

      console.log(
        `Username: ${username}
         Password: ${password}`
      );

      let data = "username=" + encodeURIComponent(username) +
        "&password=" + encodeURIComponent(password) +
        "&redirect=false";

      let request = {
        method: 'POST',
        url: 'http://localhost:8080/bonita/loginservice',
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      console.log(`Data: ${data}`);

      $http(request).then(
        function () {
          console.log('success');
          $cookies.put('user', username);
          $location.path('/testing');
        },
        function () {
          console.log('failure');
        }
      );
    }
  }
})();
