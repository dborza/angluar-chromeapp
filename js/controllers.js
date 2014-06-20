'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('BookListCtrl', ['$scope', '$location',
  function ($scope, $location) {

    $scope.books = [];

    for (var i = 1; i <= 13; i++) {
      $scope.books.push({
        title: "title" + i,
        path: "img/phones/" + i + ".jpg"
      });
    }

    $scope.changeTitle = function (book, newTitle) {
      book.title = newTitle;
    };

    $scope.loadPageDetails = function (book) {
      console.log(">>> loadPageDetails for book: ", book);
      var url = '/books/' + book.title;
      console.log(">>> url: " + url);
      $location.path(url);
    };

  }]);

appControllers.controller('BookDetailsCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    console.log(">>>> CALLED BookDetailsCtrl");

    $scope.message = "YOU ARE IN PHONE DETAILS :-)"
  }]);
