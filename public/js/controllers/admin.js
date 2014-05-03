(function(angular) {
  "use strict";

  var AdminCtrl = ["$window", "$rootScope", "$scope", "$http", "AdminService", "UserService",
    function($window, $rootScope, $scope, $http, AdminService, UserService) {
      $scope.newMember = {};
      $scope.users = {};

      $scope.init = function() {
        // Get users
        UserService.get()
          .success(function(data) {
            if (data.length === 0) {
              $scope.users = data;
            }
          });
      };

      $scope.createNewMember = function() {

      };
    }
  ];

  angular.module('gymApp').controller('AdminCtrl', AdminCtrl);

})(window.angular);
