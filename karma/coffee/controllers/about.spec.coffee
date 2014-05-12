->
  "use strict"

  describe "About controller", () ->
    scope = aboutCtrl = {}

    beforeEach ->
      module('gymApp')

    beforeEach inject(($rootScope, $controller) ->
      scope = $rootScope.$new()
      aboutCtrl = $controller("AboutCtrl",
        $scope: scope
      )
      return
    )
