angular.module('bitlion').

/*
* implement here the AngularJS $resource with whatever parameters you
* require
*/
factory('ngResourceExample', function($resource) {
    var ngResourceExample = $resource(
        '/services/search/',
        {
            'version': '1.0',
            'service': 'searchListing',
            'search_phrase': '@search_prase'
        }
    );

    return ngResourceExample;
});
