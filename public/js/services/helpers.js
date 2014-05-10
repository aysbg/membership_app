(function (angular) {
  "use strict";

  var Helpers = [
    function() {

      this.helloThere = function() {
        return console.log('hello there from the helper service');
      };
    }
  ];

  angular.module('gymApp').service('Helpers', Helpers);

})(window.angular);
