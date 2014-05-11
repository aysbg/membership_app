(function () {
  "use strict";

  describe('AboutCtrl', function() {
    var scope,
        aboutCtrl;

    beforeEach(module('gymApp'));

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();

      aboutCtrl = $controller('AboutCtrl', { $scope: scope });
    }));

    it("shoud have variable tagline", function() {
      expect(scope.tagline).toBe('About!');
    });
  });
})();
