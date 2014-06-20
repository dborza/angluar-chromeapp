'use strict';

var appModule = angular.module('appModule', [
  'ngRoute',
  'appControllers'
]);

appModule.config([
  '$compileProvider', '$routeProvider',
  function ($compileProvider, $routeProvider) {
    //  Default imgSrcSanitizationWhitelist: /^\s*(https?|ftp|file):|data:image\//
    //  chrome-extension: will be added to the end of the expression
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);

    $routeProvider.
      when('/books/:bookTitle', {
        templateUrl: 'partials/book-details.html',
        controller: 'BookDetailsCtrl'
      });
  }

]);