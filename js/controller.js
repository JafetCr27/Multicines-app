var app = angular.module("Multicines",[])
app.controller("FirstController",function($scope,$http){
   $scope.cartelera = "En cartelera!";
    $http({
        method: 'GET',
        url:'http://localhost:8080/menu'
    }).then(function successCallback(response) {
    
        $scope.pelis = response.data.products;
        console.log($scope.pelis);
    
    /*console.log(response);*/
  }, function errorCallback(response) {
      /*console.log(response);*/
  });

});