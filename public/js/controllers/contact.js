'use strict';

var ContactCtrl = ['$scope',
  function($scope) {
    $scope.tagline = 'Contact!';
  }
];

angular.module('gymApp').controller('ContactCtrl', ContactCtrl);

