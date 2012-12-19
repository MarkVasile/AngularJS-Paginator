angular.module('bitlion.controllers', []).

/* 
* example angular controller - exampleListController
* 
* make sure you implement an Angular $resource ngResourceExample that
* retrieves the listing via REST
*
* the searchListing function can be called from a search-box on keyup
* for example
*/
    controller('exampleListController', ['$scope', 'ngResourceExample', function($scope, ngResourceExample) {
        $scope.listing = ngResourceExample.query();

        $scope.searchListing = function(e, t) {
            if ($.inArray(e.keyIdentifier, ['Alt', 'Meta', 'Control', 'Shift']) != -1) return;
            page = $(e.target).attr('data-page');
            if (!page) page = 0;
            $scope.listing = ngResourceExample.get({search_phrase: $scope.search_phrase, page: parseInt(page)});
        }

    }]);
