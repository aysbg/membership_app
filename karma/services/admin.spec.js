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
  it("should set and get admin status", function() {
    var adminIsAuth;
    adminService.setAuthStatus(true);
    adminIsAuth = adminService.getAuthStatus();
    return expect(adminIsAuth).toBeTruthy();
  });
  return describe("has http requests", function() {
    afterEach(function() {
      return httpBackend.flush();
    });
    it("can get list of admins", function() {
      var admins;
      httpBackend.expectGET('/admins').respond(200, '');
      admins = adminService.get();
      return expect(admins).not.toBe(void 0);
    });
    it("can create new admin", function() {
      var newAdmin;
      newAdmin = {
        name: 'Name',
        password: 'Password',
        email: 'test@test.com',
        date: '20140520'
      };
      httpBackend.expectPOST('/admins', newAdmin).respond(201, '');
      return adminService.create(newAdmin);
    });
    return it("can check for auth of an admin", function() {
      var admin, email, pass;
      email = 'test@test.com';
      pass = 'password';
      httpBackend.expectGET('/admin/' + email + '/' + pass).respond(200, '');
      admin = adminService.isAdmin(email, pass);
      return expect(admin).not.toBe(void 0);
    });
  });
});
