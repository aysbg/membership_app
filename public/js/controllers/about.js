(function(angular) {
  'use strict';

  var AboutCtrl = ['$scope', '$http',
    function($scope, $http) {

      $scope.tagline = 'About!';

    }];

  angular.module('gymApp.controllers').controller('AboutCtrl', AboutCtrl);
})(window.angular);

