(function () {
  angular.
    module('indexApp').
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'app/components/login/loginView.html',
          controller: 'app/components/login/loginController.js'
        })
        .when('/testing', {
          templateUrl: 'app/components/testing/testingView.html',
          controller: 'app/components/testing/testingController.js'
        })
        .when('/result', {
          templateUrl: 'app/components/result/resultView.html',
          controller: 'app/components/result/resultController.js'
        })
        .otherwise({
          templateUrl: 'app/components/login/loginView.html'
        });
    }]);
})();
