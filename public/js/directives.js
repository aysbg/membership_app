(function () {
  "use strict";

  angular.module('gymApp.directives', [])
    .directive('membershipList', function() {
      return {
          restrict: 'A',

          scope: {
            memberInfo: '=info'
          },

          link: function(scope, element, attrs) {
            // cool way to get some data... ;)
            // console.log(scope.memberInfo);

            element.on('click', function() {
              element.parent().find('ul').toggleClass('active');
            });
          }
        }
    });

})();
