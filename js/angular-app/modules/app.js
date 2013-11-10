"use strict";

angular.module('leftstitch', ['ui.bootstrap', 'wu.masonry', 'reusableThings'])
    .controller('briefController', ['$scope', '$location', briefController])
    .controller('mainController', ['$scope', mainController])
    .run(function($rootScope) {
        $rootScope._content = new Firebase('https://leftstitch.firebaseio.com/content');
        $rootScope._briefs = new Firebase('https://leftstitch.firebaseio.com/briefs');
        $rootScope._designs = new Firebase('https://leftstitch.firebaseio.com/designs');
        console.log( $rootScope._briefs );
    });
