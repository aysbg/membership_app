"use strict";
describe("Services: Admin", function() {
  var adminService, httpBackend;
  adminService = {};
  httpBackend = {};
  beforeEach(function() {
    return module('gymApp');
  });
  beforeEach(inject(function(AdminService, $httpBackend) {
    adminService = AdminService;
    return httpBackend = $httpBackend;
  }));
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    return httpBackend.verifyNoOutstandingRequest();
  });
  return it("should have adminIsAuth varible", function() {
    var adminIsAuth;
    adminIsAuth = false;
    return expect(adminIsAuth).toBe(false);
  });
});
