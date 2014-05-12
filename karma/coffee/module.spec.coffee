'use strict'

describe 'Module', () ->
  module = {}

  beforeEach ->
    module = angular.module 'gymApp'

  it 'should be registered', () ->
    expect(module).not.toBe undefined
