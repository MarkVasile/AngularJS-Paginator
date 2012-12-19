var balfour = angular.module(
    'balfour',
     ['ui', 'ngResource', 'balfour.service', 'balfour.directive', 'balfour.filter', 'balfour.controllers']
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
