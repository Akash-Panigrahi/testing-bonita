(function () {
  angular.
    module('indexApp').
    config(['$httpProvider', function ($httpProvider) {
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
        let key, result = [];

        if (typeof data === 'string')
          return data;

        for (key in data) {
          if (data.hasOwnProperty(key))
            result.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return result.join('&');
      });
    }]);
})();