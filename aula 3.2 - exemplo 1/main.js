
require.config({
    baseUrl: "app",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        //## Angular modules
        'angular': '../bower_components/angularjs/angular.min',
        'angular-route': '../node_modules/angular-route/angular-route.min', 
        'angular-resource': '../node_modules/angular-resource/angular-resource.mim',
        'angularAMD': '../bower_components/angularAMD/angularAMD.min',
        'angular-cookies' : '../node_modules/angular-cookies/angular-cookies.min',
        
        'animal-service': 'animals/animal-service'

        
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular' : { 
            exports: 'angular' 
        },
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-cookies': ['angular']
    },
    
    // kick start application
    deps: ['app']
});

