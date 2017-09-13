angular.module("MulticinesApp")
    .controller("MainController", function($scope, $http) {
        $scope.loading = true;
        $http({
            method: 'GET',
            url: 'https://cine-appp.herokuapp.com/menu'
        }).then(function successCallback(response) {
            $scope.pelis = [];
            $scope.pelis = response.data.products;
            $scope.loading = false;

        }, function errorCallback(response) {
            $scope.loading = false;
            console.log("loading" + $scope.loading);
        });

    }).controller("confiController", function($scope) {

    }).controller("quienesSomosController", function($scope) {

    });