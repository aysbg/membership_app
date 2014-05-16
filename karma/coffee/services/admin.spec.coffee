"use strict"

describe "Services: Admin", () ->
  adminService = {}
  httpBackend = {}

  beforeEach ->
    module('gymApp')

  beforeEach inject((AdminService, $httpBackend) ->
    adminService = AdminService
    httpBackend = $httpBackend
  )

  afterEach ->
    httpBackend.verifyNoOutstandingExpectation()
    httpBackend.verifyNoOutstandingRequest()

  it "should set and get admin status", () ->
    adminService.setAuthStatus(true)
    adminIsAuth = adminService.getAuthStatus()
    expect(adminIsAuth).toBeTruthy()

  describe "has http requests", () ->
    afterEach ->
      httpBackend.flush()

    it "can get list of admins", () ->
      httpBackend.expectGET('/admins').respond(200, '');

      admins = adminService.get()
      expect(admins).not.toBe(undefined)

    it "can create new admin", ()  ->
      newAdmin = {
        name: 'Name',
        password: 'Password',
        email: 'test@test.com',
        date: '20140520'
      }

      httpBackend.expectPOST('/admins', newAdmin).respond(201, '');
      adminService.create(newAdmin);

    it "can check for auth of an admin", () ->
      email = 'test@test.com'
      pass = 'password'

      httpBackend.expectGET('/admin/' + email + '/' + pass).respond(200, '');
      admin = adminService.isAdmin(email, pass)

      expect(admin).not.toBe(undefined)
