angular.module("MulticinesApp", ["ngRoute"])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            $routeProvider.
            when('/', {
                controller: "MainController",
                templateUrl: "views/home.html"
            }).
            when('/confiteria', {
                controller: "confiController",
                templateUrl: "views/confi.html"
            }).
            otherwise('/');
        }
    ]);