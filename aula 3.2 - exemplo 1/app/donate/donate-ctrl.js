define(['app'
],
function (app) {
    'use strict';

    app.controller('DonateCtrl', function ($scope, $http,  $window, $location) {

        $scope.save = function (animal) {
            $http.post('http://localhost:3000/animals/', animal).
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                   $window.alert('Salvo com sucesso');
                   $location.path('/home');
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                   $window.alert('Erro ao salvar');
            });
        }

    });
});