"use strict";

angular.module('leftstitch', ['ui.bootstrap'])
    //.controller('chatController', ['$scope', chatController])
    .controller('briefEntryController', ['$scope', briefEntryController])
    .controller('mainController', ['$scope', mainController])
    .run(function($rootScope) {
        $rootScope._content = new Firebase('https://leftstitch.firebaseio.com/content');
        $rootScope._briefs = new Firebase('https://leftstitch.firebaseio.com/briefs');
        console.log( $rootScope._briefs );
    });
