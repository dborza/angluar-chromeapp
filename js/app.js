'use strict';

var appModule = angular.module('appModule', [
  'appControllers'
]);

appModule.config([
  '$compileProvider',
  function ($compileProvider) {
    //  Default imgSrcSanitizationWhitelist: /^\s*(https?|ftp|file):|data:image\//
    //  chrome-extension: will be added to the end of the expression
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension):|data:image\//);
  }
]);