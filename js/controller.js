angular.module("MulticinesApp")
    .controller("MainController", function($scope, $http) {
        $scope.cartelera = "En cartelera!";
        $scope.loading = true;
        $http({
            method: 'GET',
            url: 'https://cine-appp.herokuapp.com/menu'
        }).then(function successCallback(response) {
            $scope.pelis = [];
            $scope.pelis = response.data.products;
            $scope.loading = false;
            console.log(response.data.products);

        }, function errorCallback(response) {
            $scope.loading = false;

        });

    }).controller("confiController", function($scope) {

    });