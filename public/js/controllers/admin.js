(function(angular) {
  "use strict";

  var AdminCtrl = ["$window", "$rootScope", "$scope", "$http", "AdminService", "UserService", "AlertService",
    function($window, $rootScope, $scope, $http, AdminService, UserService, AlertService) {
      $scope.newMember = {};
      $scope.users = {};

      $scope.init = function() {
        $scope.getUsers();
      };

      $scope.getUsers = function() {
        // Get users
        UserService.get()
          .success(function(data) {
            if (data.length > 0) {
              $scope.users = data;
            }
          });
      };

      $scope.createNewMember = function() {
        if(!$scope.newMemberForm.$valid)
          return;

        $scope.newMember.terms = $scope.newMember.terms || 0;

        var user = {
          name: $scope.newMember.name,
          unique_id: $scope.newMember.uniqueId,
          email: $scope.newMember.email,
          phone: $scope.newMember.phone,
          membership: {
            year: $scope.newMember.year,
            month: $scope.newMember.month,
            status: {
              full_month: $scope.newMember.fullMonth,
              terms_remaining: $scope.newMember.terms
            }
          }
        };

        UserService.create(user)
          .success(function(data, status) {
            $scope.newMember = {};
            $scope.getUsers();
            AlertService.show('success', 'New member has been created!', 2500);
          })
          .error(function(data, status) {
            console.log(data);
          });
      };

      $scope.deleteMember = function(member) {
        UserService.delete(member.unique_id)
          .success(function(data, status) {
            $scope.getUsers();
            AlertService.show('info', 'Member has been deleted!', 2500);
          })
          .error(function(data, status) {
            console.log('something is seriously messed up');
          });
      };
    }
  ];

  angular.module('gymApp').controller('AdminCtrl', AdminCtrl);

})(window.angular);
