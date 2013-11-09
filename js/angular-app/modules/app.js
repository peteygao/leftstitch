"use strict";

angular.module('leftstitch', ['ui.bootstrap'])
  .controller('chatController', ['$scope', chatController])
  .controller('mainController', ['$scope', mainController])
  .run(function($rootScope) {
      $rootScope.ref = new Firebase('https://leftstitch.firebaseio.com/content');
});
