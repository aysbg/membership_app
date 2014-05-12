(function () {
  "use strict";

  var Adminmodel = [
    function() {
      return {
        months: ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'],

        editUserId: 0
      }
    }
  ];

  angular.module('AdminModel', []).factory('AdminModel', Adminmodel);

})();
