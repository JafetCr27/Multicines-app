angular.module("MulticinesApp")
    .controller("FirstController",function($scope,$http){
   /*$scope.cartelera = "En cartelera!";
    $http({
        method: 'GET',
        url:'http://localhost:8080/menu'
    }).then(function successCallback(response) {
    
        $scope.pelis = response.data.products;
        
        $scope.datosComp = response.data.products;
        var length = $scope.datosComp.length;
        for (i = 0; i < length; i++) {
        console.log($scope.datosComp[i].imagenUrl);
        $scope.pelis = $scope.datosComp[i].imagenUrl;
        
    };
    
       // console.log($scope.pelis);
    
    /*console.log(response);
  }, function errorCallback(response) {
      /*console.log(response);
  });

*/});