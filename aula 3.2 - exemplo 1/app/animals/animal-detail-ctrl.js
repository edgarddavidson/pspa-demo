define(['app'
],
function (app) {
    'use strict';

    app.controller('AnimalDetailCtrl', function ($scope, $http, $routeParams, $window) {
        $http.get('http://localhost:3000/animals/' + $routeParams.id).success(function (data) {
            $scope.animal = data;
        }).error(function (error) {
            $window.alert('Não foi possível buscar a lista de animais do servidor');
        });

    });
});