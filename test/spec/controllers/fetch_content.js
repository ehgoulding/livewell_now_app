'use strict';

describe('Controller: FetchContentCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var FetchContentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FetchContentCtrl = $controller('FetchContentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
