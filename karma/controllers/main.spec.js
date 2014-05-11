(function () {
  'use strict';

  describe('MainCtrl', function(){
    var scope,
        mainCtrl,
        adminService,
        alertService;

    beforeEach(module('gymApp'));

    beforeEach(inject(function($rootScope, $controller) {
      // set scope
      scope = $rootScope.$new();
      //adminService = AdminService;

      mainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

    // tests start here
    it('should have variable tagline', function(){
      // console.log(mainCtrl);
      // expect(scope.tagline).toEqual('To the moon and back!');
    });
  });

})();
