angular.module("app")
    .service("mainSvc", function($http) {

        this.getData = function() {
            return $http({
                    method: 'jsonp',
                    url: "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=JSON_CALLBACK"
                })
                .then(function(response) {
                    return response;
                })
        };

    });
