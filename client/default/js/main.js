var app = angular.module('inTouchDashboardApp', []);

app.controller('LoginController', function($scope) {

    $scope.login = function() {
        console.log($scope.username, $scope.password);

        $fh.act(
            {
                act:'login',
                req: {
                    username: $scope.username,
                    password: $scope.password
                }
            },
            function(res) {
                console.log('result', res);
            },
            function(code, errorprops, params) {
                console.error('An error occured: ' + code + ' : ' + JSON.stringify(errorprops));
            }
        );
    }
});



