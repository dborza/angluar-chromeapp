'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('TestController', ['$scope', '$sce',
  function ($scope, $sce) {
    $scope.testValue = 'caca-maca-value';
    $scope.imageUrl = 'img/phones/1.jpg';

    $scope.trustAsResourceUrl = function (url) {
      console.log("running trustAsResourceUrl: " + url);
      console.log("sce service: ", $sce);
      console.log($sce.trustAsResourceUrl("img/phones/dell-venue.0.jpg"));
      return $sce.trustAsResourceUrl(url);
    }

    $scope.books = []

    for (var i = 1; i <= 13; i++) {
      $scope.books.push({
        title: "title" + i,
        path: "img/phones/" + i + ".jpg"
      });
    }

    $scope.cols = 2;
    $scope.rows = Math.ceil($scope.books.length / $scope.cols);

  }]);