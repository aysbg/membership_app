"use strict"

describe "Services: Users", () ->
  userService = {}
  httpBackend = {}

  beforeEach ->
    module('gymApp')

  beforeEach inject((UserService, $httpBackend) ->
    userService = UserService
    httpBackend = $httpBackend
  )

  afterEach ->
    httpBackend.verifyNoOutstandingExpectation()
    httpBackend.verifyNoOutstandingRequest()

  describe "has http requests", () ->
    afterEach ->
      httpBackend.flush()

    it "can get list of users", () ->
      httpBackend.expectGET('/users').respond(200, '');

      users = userService.get()
      expect(users).not.toBe(undefined)

