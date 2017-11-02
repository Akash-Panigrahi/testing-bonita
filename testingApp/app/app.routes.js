(function () {
  angular.
    module('indexApp').
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/testing', {
          templateUrl: 'app/components/testing/testingView.html',
          controller: 'app/components/testing/testingController.js'
        })
        .when('/result', {
          templateUrl: 'app/components/result/resultView.html',
          controller: 'app/components/result/resultController.js'
        })
        .otherwise({
          templateUrl: 'app/components/testing/testingView.html'
        });
    }]);
})();
