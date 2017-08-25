angular.module("MulticinesApp")
    .controller("MainController", function($scope, $http) {
        $scope.cartelera = "En cartelera!";
        $http({
            method: 'GET',
            url: 'https://cine-appp.herokuapp.com/menu'
        }).then(function successCallback(response) {
            $scope.pelis = [];
            $scope.pelis = response.data.products;
            console.log(response.data.products);
        }, function errorCallback(response) {
            console.log(response);
        });

    }).controller("confiController", function($scope) {

    });