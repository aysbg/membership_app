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

  it "should have adminIsAuth varible", () ->
    adminIsAuth = false
    expect(adminIsAuth).toBe(false)
