(function () {
  "use strict";

  var Helpers = [
    function() {
      this.helloThere = function() {
        return console.log('hello there from the helper service');
      };
    }
  ];

  angular.module('HelperService', []).service('Helpers', Helpers);

})();
