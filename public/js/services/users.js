(function (angular) {
  "use strict";

  var UserService = ['$http',
    function($http) {
      return {
        get: function() {
          return $http.get('/users');
        },

        create: function(member) {
          return $http.post('/users', member);
        },

        update: function(uId, member) {
          console.log(uId);
          return $http.put('/users/' + uId, member);
        },

        delete: function(uId) {
          return $http.delete('/users/' + uId);
        }
      };
    }
  ];

  angular.module('gymApp').factory('UserService', UserService);

})(window.angular);
