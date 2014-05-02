(function(angular) {
  "use strict";

  var ContactCtrl = ["$scope", "$http",
    function($scope, $http) {

      $scope.tagline = 'Contact!';

    }];

  angular.module('gymApp').controller('ContactCtrl', ContactCtrl);

})(window.angular);
