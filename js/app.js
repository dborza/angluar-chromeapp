'use strict';

var appModule = angular.module('appModule', [
  'appControllers'
]);

appModule.config([
  '$compileProvider',
  function ($compileProvider) {
    var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
    var newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0, -1)
      + '|chrome-extension:'
      + currentImgSrcSanitizationWhitelist.toString().slice(-1);

    console.log("Changing imgSrcSanitizationWhiteList from " + currentImgSrcSanitizationWhitelist + " to " + newImgSrcSanitizationWhiteList);
    $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
  }
]);