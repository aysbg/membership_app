(function () {
  "use strict";

  angular.module('gymApp')

    .factory('AdminModel', function() {
      return {
        months: ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'],

        editUserId: 0
      }
    });

})();
