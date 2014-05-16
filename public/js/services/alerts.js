(function() {
  'use strict';

  var AlertService = ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
      // create an array of alerts available globally
      $rootScope.alerts = [];

      var alertService = {
        show: function(type, msg, timeout) {
          $rootScope.alerts.push({
            type: type,
            msg: msg,
            close: function() {
              return alertService.closeAlert(this);
            }
          });

          if(timeout) {
            $timeout(function(){
              alertService.closeAlert(this);
            }, timeout);
          }
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

  angular.module('gymApp.services').factory('AlertService', AlertService);
})();

