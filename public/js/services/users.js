(function() {
  'use strict';

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
          return $http.put('/users/' + uId, member);
        },

        remove: function(uId) {
          return $http.delete('/users/' + uId);
        },

        addMembership: function(uId, data) {
          return $http.post('/membership/' + uId, data);
        },

        updateTermsCount: function(uId, terms) {
          return $http.post('/terms/' + uId, terms);
        }
      };
    }
  ];

  angular.module('gymApp.services').factory('UserService', UserService);
})();

