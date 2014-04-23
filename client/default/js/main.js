console.log('hello');


var app = angular.module('inTouchDashboardApp', []);

app.controller('LoginController', function($scope) {

    $scope.login = function() {
        console.log($scope.username, $scope.password);
    }
});