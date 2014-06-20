'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('TestController', ['$scope',
  function ($scope) {
    $scope.testValue='caca-maca-value'
  }]);