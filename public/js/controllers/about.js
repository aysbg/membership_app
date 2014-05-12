(function() {
  "use strict";

  var AboutCtrl = ["$scope", "$http",
    function($scope, $http) {

      $scope.tagline = 'About!';

    }];

  angular.module('AboutCtrl', []).controller('AboutCtrl', AboutCtrl);

})();
