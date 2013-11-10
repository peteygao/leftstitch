"use strict";

var briefController = function($scope, $location) {

    $scope.timeAgo = function( timestamp ){
      return jQuery.timeago( new Date(timestamp) );
    }

    $scope.init = function() {

      var briefId = $location.search()['briefId'];
      console.log( "brief id", briefId );

      var url = 'https://leftstitch.firebaseio.com/briefs/'+briefId;
      console.log( 'url', url );

      $scope.brief_ref = new Firebase(url);

      $scope.brief_ref.on('value', function(snapshot) {
          console.log('actual brief value: ', snapshot.val());

          $scope.brief = snapshot.val();
          $scope.$apply();

          var judgeId = $scope.brief.judgeId;

          $scope.judge_ref = new Firebase('https://leftstitch.firebaseio.com/judges/'+judgeId);
          $scope.judge_ref.on('value', function(snapshot){
            console.log('actual brief value: ', snapshot.val());
            $scope.judge = snapshot.val();
            $scope.$apply();
          });
      });

    }
}
