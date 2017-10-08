angular.module("app")
    .controller("mainCtrl", function($scope, mainSvc) {

        mainSvc.getData()
            .then(function(response) {
                console.log(response);
                $scope.twitch = response;
                if (response.data.stream) {
                    $scope.streaming = true;
                    $scope.notStreaming = false;
                } else {
                    $scope.notStreaming = true;
                    $scope.streaming = false;
                }

            })

});
