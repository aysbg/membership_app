(function () {
  "use strict";

  angular.module('gymApp').service('Helpers', [
    function() {

      this.helloThere = function() {
        return console.log('hello there from the helper service');
      };
    }
  ]);

})();
