'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('balfour app', function() {

    beforeEach(module('balfour'));

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it ('should automatically redirect to #/ when location hash/fragment is empty', function() {
        expect(browser().location().url()).toBe("#/");
    });

    describe('Rep Listing Controller', function() {
        var ctrl, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller(RepListController, {
                $scope: scope
            });
        }));

        it('$location dependency should be injected', function() {
            expect(ctrl.location).toBeDefined();
        });
    });

    describe('Rep Listing UI', function() {
        beforeEach(function() {
            browser().navigateTo('#/');
        });

        it ('should render a search box when user navigates to #/', function() {
            expect(element('[ng-view] input:first')).toBeDefined();
        });

        it ('should filter results', function() {
            input('search_phrase').enter('tes');
            expect(repeater('tr').count()).toEqual(1);
        });
    });


    describe('Rep Edit', function() {
        beforeEach(function() {
            browser().navigateTo('#/');
            input('search_phrase').enter('tes');
            element('.replist tr:first td a:first').click();
        });

        afterEach(function() {
            browser().navigateTo('#/');
        });

        it ('should render Rep Edit when user clicks on a rep', function() {
            expect(element('[ng-view] h3:first').text()).
            toMatch(/Rep Info/);
        });

        if ('should display the correct rep info', function() {
            expect(element('#r1_repId').text()).toBe('BAL0745');
            expect(element('#r1_repType').value()).toBe('0');
            expect(element('#r1_friendlyName').value()).toBe('DAVE KASS & ASSOCIATES');
        });

    });
});

