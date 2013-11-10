var submissionController = function($scope, $location) {
    $scope.image = null;
    $scope.imageFileName = '';

    $scope.submissionId = null;

    $scope.init = function() {
        var briefId = $location.search()['briefId'];

        $scope.brief = new Firebase('https://leftstitch.firebaseio.com/briefs/'+briefId);

        $scope.submissionId = $scope.brief.child('submissions').push().name();
    }

    $scope.$watch('image', function(newValue, oldValue) {
        var imageId;

        if (newValue !== "" && newValue !== null && newValue !== void 0) {
            console.log("New image has been uploaded to Firebase!");
            imageId = $scope.brief.child('submissions').child($scope.submissionId).child('images').push().name();
            $scope.brief.child('submissions').child($scope.submissionId).child('images').child(imageId).set(newValue);
            $scope.brief.child('submissions').child($scope.submissionId).child('title').set($scope.imageFileName);
        }
    });
}
