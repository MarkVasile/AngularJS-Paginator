'use strict';

/* jasmine specs for controllers go here */

describe('Balfour controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('balfourServices'));

    describe('repListController', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('services/search?search_phrase=tes&service=searchReps&version=1.0').
                respond([{data: [{city: 'Coral Springs', friendly_name: 'DAVE KASS & ASSOCIATES', id: 'BAL0745', rep_type: 'balfour', state: 'FL', zip: '33071'}], pages: 0, request: 'searchReps', success: 'ok', version: '1.0'}]);

            scope = $rootScope.$new();
            ctrl = $controller(repListController, {$scope: scope});
        }));


        it('should create "reps" model with 1 rep fetched from xhr', function() {
            expect(scope.reps).toEqual([]);
            $httpBackend.flush();

            expect(scope.reps).toEqualData(
                [{data: [{city: 'Coral Springs', friendly_name: 'DAVE KASS & ASSOCIATES', id: 'BAL0745', rep_type: 'balfour', state: 'FL', zip: '33071'}], pages: 0, request: 'searchReps', success: 'ok', version: '1.0'}]
            );
        });

    });
});
