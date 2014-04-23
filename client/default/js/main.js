var app = angular.module('inTouchDashboardApp', ['ngRoute', 'ngCookies']);


app.config(function($routeProvider) {
    $routeProvider

        .when('/login', {
            templateUrl : 'templates/login.html'
        })

        .when('/ration', {
            templateUrl : 'templates/ration.html'
        })

        .otherwise({
            redirectTo: '/login'
        });
});


app.controller('LoginController', function($scope, $location, $cookieStore) {

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
                if (res.result === 'success') {
                    $cookieStore.put('session', Math.random());
                }
                else {
                    $cookieStore.remove('session');
                }

                $location.path('/ration');

                $scope.$apply();
            },
            function(code, errorprops, params) {
                console.error('An error occured: ' + code + ' : ' + JSON.stringify(errorprops));
            }
        );
    }
});


app.controller('RationController', function($scope) {

    $scope.name = '123';
});


app.controller('AppController', function($scope, $location, $cookieStore) {

    var session = $cookieStore.get('session');

    if (session) {
        $location.path('/ration');
    }
    else {
        $location.path('/login');
    }

});

