"use strict";

angular.module('leftstitch', ['ui.bootstrap', 'wu.masonry'])
    .controller('briefController', ['$scope', briefController])
    .controller('mainController', ['$scope', mainController])
    .run(function($rootScope) {
        $rootScope._content = new Firebase('https://leftstitch.firebaseio.com/content');
        $rootScope._briefs = new Firebase('https://leftstitch.firebaseio.com/briefs');
        console.log( $rootScope._briefs );
    });
