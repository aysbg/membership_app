(function (angular) {
  'use strict';

  var AdminCtrl = ['$timeout', '$modal', '$rootScope', '$scope', '$http', 'AdminService', 'AdminModel', 'UserService', 'AlertService',
    function($timeout, $modal, $rootScope, $scope, $http, AdminService, AdminModel, UserService, AlertService) {
      $scope.newMember = {};
      $scope.users = {};
      $scope.months = AdminModel.months;
      $scope.showForms = {};
      $scope.showForms.newMember = true;
      $scope.showForms.editMember = false;
      $scope.showForms.editMembership = false;
      $scope.showMembershipList = {};

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
        if(!$scope.newMemberForm.$valid) {
          return;
        }

        $scope.newMember.terms = $scope.newMember.terms || 0;

        var user = {
          name: $scope.newMember.name,
          unique_id: $scope.newMember.uniqueId,
          email: $scope.newMember.email,
          phone: $scope.newMember.phone,
          membership: [
            {
              year: $scope.newMember.year,
              month: $scope.newMember.month,
              full_month: $scope.newMember.fullMonth,
              terms_remaining: $scope.newMember.terms
            }
          ]
        };

        UserService.create(user)
          .success(function() {
            $scope.newMember = {};
            $scope.getUsers();
            AlertService.show('success', 'New member has been created!', 2500);
          })
          .error(function(status) {
            console.log(status);
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
          .success(function() {
            $scope.getUsers();
            AlertService.show('info', 'Member has been updated!', 2500);

            $timeout(function() {
              $scope.showForms.editMember = false;
            }, 2500);
          })
          .error(function(status) {
            console.log('something went wrong with the update process' + status);
          });
      };

      $scope.deleteMember = function(member) {
        UserService.remove(member.unique_id)
          .success(function() {
            $scope.getUsers();
            AlertService.show('info', 'Member has been deleted!', 2500);
          })
          .error(function(status) {
            console.log('something is seriously messed up' + status);
          });
      };

      $scope.addNewMembership = function(membership) {
        membership.terms = membership.terms || 0;
        membership.fullMonth = membership.fullMonth || false;

        var data = {
          year: parseInt(membership.year),
          month: membership.month,
          full_month: membership.fullMonth,
          terms_remaining: membership.terms
        };

        UserService.addMembership(AdminModel.editUserId, data)
          .success(function() {
            $scope.getUsers();
            AlertService.show('info', 'Membership has been added!', 2500);
          })
          .error(function(status) {
            console.log('something is seriously messed up' + status);
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

      $scope.openMembershipList = function(uniqueId) {
        var len = Object.keys($scope.showMembershipList).length;

        if (len > 0) {
          angular.element('.membership-list').removeClass('active');
          $scope.showMembershipList = {};
        }

        $scope.showMembershipList[uniqueId] = !$scope.showMembershipList[uniqueId];
      };

      $scope.showMembershipModal = function(member) {
        // open modal instance
        var modalInstance = $modal.open({
          templateUrl: 'userMembershipModal',
          controller: ModalCtrl,
          size: 'md',
          keyboard: false,
          resolve: {
            user: function() {
              return member;
            }
          }
        });

        modalInstance.result.then(function (updatedMembership) {
          $scope.addNewMembership(updatedMembership);
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

      $scope.add_term = function(uId, currentTerms) {
        currentTerms++;

        var newTerms = {
          terms_remaining: currentTerms
        };

        UserService
            .updateTermsCount(uId, newTerms)
            .success(function() {
              $scope.getUsers();
              AlertService.show('info', 'Terms have been added!', 2500);
            })
            .error(function(status) {
              console.log('something is seriously messed up' + status);
            });
      };

      $scope.reduce_term = function(uId, currentTerms) {
        currentTerms--;

        var newTerms = {
          terms_remaining: currentTerms
        };

        UserService
            .updateTermsCount(uId, newTerms)
            .success(function() {
              $scope.getUsers();
              AlertService.show('info', 'Terms have been reduced!', 2500);
            })
            .error(function(status) {
              console.log('something is seriously messed up' + status);
            });
      };
    }
  ];


  var ModalCtrl = ['$scope', '$modalInstance', 'user', 'AdminModel',
    function($scope, $modalInstance, user, AdminModel) {
      $scope.months = AdminModel.months;
      $scope.user = user;
      $scope.membership = {};

      $scope.ok = function () {
        AdminModel.editUserId = user.unique_id;
        $modalInstance.close($scope.membership);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }
  ];

  angular.module('gymApp.controllers').controller('AdminCtrl', AdminCtrl);
  angular.module('gymApp.controllers').controller('ModalCtrl', ModalCtrl);

})(window.angular);
