(function () {
  angular.
    module('indexApp').
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'app/components/login/loginView.html',
          controller: 'loginController'
        })
        .when('/testing', {
          templateUrl: 'app/components/testing/testingView.html',
          controller: 'testingController'
        })
        .when('/result', {
          templateUrl: 'app/components/result/resultView.html',
          controller: 'resultController'
        })
        .otherwise({
          redirectTo: '/login'
        });
    }]);
})();
