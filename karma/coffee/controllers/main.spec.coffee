"use strict"

describe "main controller", () ->
  scope = {}
  mainCtrl = {}
  adminService = {}

  beforeEach ->
    module('gymApp')

  beforeEach inject(($rootScope, $controller, AdminService) ->
    scope = $rootScope.$new()
    adminService = AdminService
    mainCtrl = $controller("MainCtrl",
      $scope: scope
    )
  )

  it "should have tagline variable with value", () ->
    expect(scope.tagline).toBe('To the moon and back!')

