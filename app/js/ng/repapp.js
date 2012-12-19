var bitlion = angular.module(
    'bitlion',
     ['ui', 'ngResource', 'bitlion.service', 'bitlion.directive', 'bitlion.filter', 'bitlion.controllers']
    ).

    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {controller: 'exampleListController', templateUrl: 'partials/example_listing.html'}).

            otherwise({redirectTo: '/'});

        // $locationProvider.html5Mode(true).hashPrefix('!');
    }]).

    run(function($location) {
        $location.path('/');
    });
