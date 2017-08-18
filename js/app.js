angular.module("MulticinesApp",["ngRoute"])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/', {
                controller:"FirstController",
                templateUrl: "views/home.html"
                })
            }
    ]);