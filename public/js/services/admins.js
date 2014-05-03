(function(angular) {
  "use strict";

  var AdminService = ['$http', function($http) {
    var adminIsAuth = false;

    return {
      get: function() {
        return $http.get('/admins');
      },

      // call to POST and create a new member
      create: function(newAdmin) {
        return $http.post('/admins', newAdmin);
      },

      // call to DELETE a member
      delete: function(id) {
        // return $http.delete('/api/nerds/' + id);
      },

      isAdmin: function(email, pass) {
        return $http.get('/admin/' + email +'/'+ pass);
      },

      setAuthStatus: function(value) {
        adminIsAuth = value;
      },

      getAuthStatus: function() {
        return adminIsAuth;
      }
    };
  }];

  angular.module('gymApp').factory('AdminService', AdminService);

})(window.angular);
