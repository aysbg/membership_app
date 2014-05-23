(function(angular) {
  'use strict';

  var Adminmodel = [
    function() {
      return {
        months: ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'],

        editUserId: 0
      };
    }
  ];

  angular.module('gymApp.models').factory('AdminModel', Adminmodel);
})(window.angular);

