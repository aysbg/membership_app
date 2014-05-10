(function (angular) {
  "use strict";

  var AdminModel = function() {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    }
  };

  angular.module('gymApp').factory('AdminModel', AdminModel);

})(window.angular);
