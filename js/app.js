$(document).ready(function(){
    $('.slider').slider();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

});
angular.module("MulticinesApp",["ngRoute"])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/', {
                    controller:"MainController",
                    templateUrl: "views/home.html"
                })
            }
    ]);