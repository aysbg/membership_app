(function (angular) {
  "use strict";

  var UserService = ['$http',
    function($http) {
      return {
        get: function() {
          return $http.get('/users');
        }
      }
    }
  ];

  angular.module('gymApp').factory('UserService', UserService);

})(window.angular);
