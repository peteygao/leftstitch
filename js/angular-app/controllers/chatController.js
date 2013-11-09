var chatController = function($scope) {
    $scope.username = 'Guest' + Math.floor(Math.random()*101);
    $scope.messages = {};
    $scope.addMessage = function() {
        var id = $scope.ref.push().name();
        $scope.messages[id] = {
            from: $scope.username, content: $scope.message
        };
        $scope.message = "";
        $scope.ref.child(id).set($scope.messages[id]);
    }

    // Fetches all the messages when the app loads, and when new messages are sent over the wire
    $scope.ref.on('child_added', function(snapshot) {
        $scope.messages[snapshot.name()] = snapshot.val();
        $scope.$apply();
    });
}
