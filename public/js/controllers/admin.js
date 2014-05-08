(function(angular) {
  "use strict";

  var AdminCtrl = ["$timeout", "$modal", "$rootScope", "$scope", "$http", "AdminService", "UserService", "AlertService",
    function($timeout, $modal, $rootScope, $scope, $http, AdminService, UserService, AlertService) {
      $scope.newMember = {};
      $scope.users = {};
      $scope.months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      $scope.showForms = {};
      $scope.showForms.newMember = true;
      $scope.showForms.editMember = false;

      $scope.init = function() {
        $scope.getUsers();
      };

      $scope.getUsers = function() {
        UserService.get()
          .success(function(data) {
            $scope.users = data;
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

      $scope.updateMember = function() {
        var user = {
          name: $scope.editMember.name,
          unique_id: $scope.editMember.uniqueId,
          email: $scope.editMember.email,
          phone: $scope.editMember.phone
        };

        UserService.update(user.unique_id, user)
          .success(function(data, status) {
            $scope.getUsers();
            AlertService.show('info', 'Member has been updated!', 2500);

            $timeout(function() {
              $scope.showForms.editMember = false;
            }, 2500);
          })
          .error(function(data, status) {
            console.log('something went wrong with the update process');
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

      $scope.showEditForm = function(member) {
        $scope.showForms.editMember = true;

        // Set values to inputs:
        $scope.editMember = {
          name: member.name,
          uniqueId: member.unique_id,
          email: member.email,
          phone: member.phone
        };
      };

      $scope.openMembershipModal = function (userId) {

        var modalInstance = $modal.open({
          templateUrl: 'userMembershipModal',
          controller: AdminCtrl,
          size: 'sm',
          keyboard: false
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
    }
  ];

  angular.module('gymApp').controller('AdminCtrl', AdminCtrl);

})(window.angular);
