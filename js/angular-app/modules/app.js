angular.module('leftstitch', ['ui.bootstrap'])
  .controller('Chat', ['$scope', chatController])
  .run(function($rootScope) {
      $rootScope.ref = new Firebase('https://leftstitch.firebaseio.com/content');
});
