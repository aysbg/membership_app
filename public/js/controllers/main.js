(function(angular) {
  'use strict';

  var MainCtrl = ['$location', '$rootScope', '$scope', '$http', 'AdminService', 'AlertService',
    function($location, $rootScope, $scope, $http, AdminService, AlertService) {
      $scope.showAdminCreateForm = false;
      $scope.showLoginForm = true;
      $scope.newAdmin = {};

      $scope.tagline = 'To the moon and back!';

      $scope.init = function() {
        $scope.checkForAdmins();
      };

      $scope.checkForAdmins = function() {
        AdminService.get()
          .success(function(data) {
            if (data.length === 0) {
              $scope.showAdminCreateForm = true;
              $scope.showLoginForm = false;
            }
          });
      };

      $scope.createNewAdmin = function() {
        var newAdmin = {
          email: $scope.newAdmin.email,
          name: $scope.newAdmin.name,
          password: $scope.newAdmin.password
        };

        AdminService.create(newAdmin)
          .success(function() {
            // hide the new admin form
            $scope.showAdminCreateForm = false;
            // shown login form
            $scope.showLoginForm = true;
          }).error(function(status) {
            console.log('there has been an error saving admin! ' + status);
          });
      };

      $scope.loginAdmin = function() {
        if($scope.adminLoginForm.$valid) {
          var email = $scope.adminLogin.email,
              pass = $scope.adminLogin.password;

          AdminService.isAdmin(email, pass)
            .success(function(data) {
              if( data === 'true' ) {
                AdminService.setAuthStatus(true);
                $location.path('/admin');
              }
              else {
                AlertService.show('danger', 'Email or password are not correct!');
              }
            }).error(function(status) {
              console.log('there is an error' + status);
            });
        }
      };

    }
  ];

  angular.module('gymApp.controllers').controller('MainCtrl', MainCtrl);
})(window.angular);

