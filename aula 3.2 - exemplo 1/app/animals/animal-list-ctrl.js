define(['app'
], 
function (app) {
    'use strict';
    app.controller('AnimalListCtrl', function ($scope, $http, $window, $location) {
         $http.get('http://localhost:3000/animals').success(function (data) {
            data.shift();
            $scope.animalList = data;
        }).error(function (error) {
            $window.alert('Não foi possível buscar a lista de animais do servidor');
        });
        
        
        $scope.animalDetail = function(animal){
            $location.path('/detail/' + animal.id);
        }
    });
});
