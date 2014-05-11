(function () {
  'use strict';

  describe('module exists', function() {
    var module;
    beforeEach(function() {
      module = angular.module("gymApp");
    });

    it("should be registered", function() {
      expect(module).not.toBe(undefined);
    });
  });
})();
