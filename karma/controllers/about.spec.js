"use strict";
describe("About controller", function() {
  var aboutCtrl, scope;
  scope = {};
  aboutCtrl = {};
  beforeEach(function() {
    return module('gymApp');
  });
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    return aboutCtrl = $controller("AboutCtrl", {
      $scope: scope
    });
  }));
  return it("should have variable tagline", function() {
    return expect(scope.tagline).toBe('About!');
  });
});
