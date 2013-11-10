"use strict";

var briefEntryController = function($scope) {
    $scope.briefs = {};

    $scope.addBrief = function() {
        var id = $scope._briefs.push().name();
        $scope.briefs[id] = {
            judge: $scope.judge, description: $scope.description
        };
        $scope.description = "";
        $scope._briefs.child(id).set($scope.briefs[id]);
    }

    // Fetches all the messages when the app loads, and when new messages are sent over the wire
    $scope._briefs.on('child_added', function(snapshot) {
        $scope.briefs[snapshot.name()] = snapshot.val();
        $scope.$apply();
    });
}
