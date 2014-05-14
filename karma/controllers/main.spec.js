"use strict";
describe("main controller", function() {
  var adminService, mainCtrl, scope;
  scope = {};
  mainCtrl = {};
  adminService = {};
  beforeEach(function() {
    return module('gymApp');
  });
  beforeEach(inject(function($rootScope, $controller, AdminService) {
    scope = $rootScope.$new();
    adminService = AdminService;
    return mainCtrl = $controller("MainCtrl", {
      $scope: scope
    });
  }));
  return it("should have tagline variable with value", function() {
    return expect(scope.tagline).toBe('To the moon and back!');
  });
});
