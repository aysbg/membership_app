(function() {
  "use strict";

  var ContactCtrl = ['$scope',
    function($scope) {
      $scope.tagline = 'Contact!';
    }
  ];

  angular.module('ContactCtrl', []).controller('ContactCtrl', ContactCtrl);

})();
