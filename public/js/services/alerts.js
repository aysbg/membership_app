(function (angular) {
  "use strict";

  var AlertService = ['$rootScope',
    function($rootScope) {
      var alertService = {};

      // create an array of alerts available globally
      $rootScope.alerts = [];

      return {
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

        closeAlertIdx: function(idx) {
          $rootScope.alerts.splice(index, 1);
        },

        clear: function() {
          $rootScope.alerts = [];
        }
      }
    }
  ];

  angular.module('gymApp').factory('AlertService', AlertService);

})(window.angular);
