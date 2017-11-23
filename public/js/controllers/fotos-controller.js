angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];

    // Não precisa adicionar o retorno a uma varivel, o angular permite esse atalho com o success, retorno é o data
    $http.get('v1/fotos').success(function (fotos) {
        $scope.fotos = fotos;
    }).error(function(error) {
        console.log(error);
    });

});
