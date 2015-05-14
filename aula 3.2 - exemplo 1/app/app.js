'use strict';

define(['angularAMD', 
        'angular-route',  
        'angular-cookies'
        ], function (angularAMD) {
  
    var app = angular.module("app", ['ngRoute', 
                                     'ngCookies'
                                    ]);

    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider        
        .when("/home", angularAMD.route({
                    templateUrl: 'app/animals/views/animal-list.html', 
                    controller: 'AnimalListCtrl', 
                    controllerUrl: 'animals/animal-list-ctrl'
                }))
        
        .when("/donate", angularAMD.route({
            templateUrl: 'app/donate/views/donate.html', 
            controller: 'DonateCtrl', 
            controllerUrl: 'donate/donate-ctrl'
        }))
        
        .when("/detail/:id", angularAMD.route({
            templateUrl: 'app/animals/views/animal-detail.html', 
            controller: 'AnimalDetailCtrl', 
            controllerUrl: 'animals/animal-detail-ctrl'
        }))

        
        .otherwise({redirectTo: '/home'});
    }]);

  
    return angularAMD.bootstrap(app);

});

