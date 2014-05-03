(function (angular) {
  "use strict";

  var AlertService = ['$rootScope',
    function($rootScope) {
      // create an array of alerts available globally
      $rootScope.alerts = [];

      var alertService = {
        show: function(type, msg) {
          return $rootScope.alerts.push({
            type: type,
            msg: msg,
            close: function() {
              return alertService.closeAlert(this);
            }
          });
        },

        closeAlert: function(alert) {
          return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
        },

        closeAlertIdx: function(index) {
          $rootScope.alerts.splice(index, 1);
        },

        clear: function() {
          $rootScope.alerts = [];
        }
      };

      return alertService;
    }
  ];

  angular.module('gymApp').factory('AlertService', AlertService);

})(window.angular);
