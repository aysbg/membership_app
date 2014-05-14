'use strict';

var AboutCtrl = ["$scope", "$http",
  function($scope, $http) {

    $scope.tagline = 'About!';

  }];

angular.module('gymApp').controller('AboutCtrl', AboutCtrl);
