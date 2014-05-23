(function () {
  "use strict";

  angular.module('gymApp.services', []);
  angular.module('gymApp.controllers', []);
  angular.module('gymApp.models', []);
  angular.module('gymApp.directives', []);

  var gymApp = angular.module('gymApp', [
    'ngRoute',
    'ui.bootstrap',
    'gymApp.services',
    'gymApp.controllers',
    'gymApp.models',
    'gymApp.directives'
  ]);

  gymApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        // home page
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        requireLogin: false
      })

      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        requireLogin: true
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        requireLogin: false
      })

      //
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        requireLogin: false
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  }])
  
    .run(['$rootScope', 'AdminService', '$location',
      function ($rootScope, AdminService, $location) {
        // Everytime the route in our app changes check auth status
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
          // if you're logged out send to login page.
          if (next.requireLogin && !AdminService.getAuthStatus()) {
            // [ToDo] uncomment these two lines after you are done working on admin page
            $location.path('/');
            event.preventDefault();
          }
        });
      }
      ]);
})();

