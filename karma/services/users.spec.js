"use strict";
describe("Services: Users", function() {
  var httpBackend, userService;
  userService = {};
  httpBackend = {};
  beforeEach(function() {
    return module('gymApp');
  });
  beforeEach(inject(function(UserService, $httpBackend) {
    userService = UserService;
    return httpBackend = $httpBackend;
  }));
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    return httpBackend.verifyNoOutstandingRequest();
  });
  return describe("has http requests", function() {
    afterEach(function() {
      return httpBackend.flush();
    });
    return it("can get list of users", function() {
      var users;
      httpBackend.expectGET('/users').respond(200, '');
      users = userService.get();
      return expect(users).not.toBe(void 0);
    });
  });
});
