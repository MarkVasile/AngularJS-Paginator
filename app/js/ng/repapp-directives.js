var balfour_directive = angular.module('balfour.directive', []).

/*
* paginator widget
* - parameters are given via element attributes
*
*   @attr page_window the number of page numbers displayed before going to ... <Last>.
*   Optional. Defaults to 5 pages.
*
*   @attr total_pages the total number of pages
*
*   @attr current_page the current page number (index0 based)
*
*   @attr url the URL to paginate through. Must end with ? if no parameters.
*
*   @attr call the scope function to call when requesting a new page
*
*   @attr wclass is the CSS class name to be set for the current page index
*
*   Attributes 'url' and 'call' are mutually exclusive, url takes precedence.
*/
directive('paginator', function () {
    return {
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
            var html = '';
            var page_window = 5;
            var url = "javascript:void(0);";
            var call = '';
            var total_pages = current_page = 0;
            var wclass = '';

            attrs.$observe("currentPage", function(t) {
                if (t) current_page = t;
                refreshReps();
            });

            attrs.$observe("call", function(t) {
                if (t) call = t;
                refreshReps();
            });

            attrs.$observe("pageWindow", function(t) {
                if (t) page_window = t;
                refreshReps();
            });

            attrs.$observe("totalPages", function(t) {
                if (t) total_pages = t;
                refreshReps();
            });

            attrs.$observe("wclass", function(t) {
                if (t) wclass = t;
            });

            function refreshReps() {
                if (!total_pages) return;
                html = '';

                if (attrs.pageWindow != undefined) page_window = parseInt(attrs.pageWindow);
                if (attrs.url != undefined) url = attrs.url;

                var left_page = current_page - Math.floor(page_window/2);
                if (total_pages - current_page <= Math.floor(page_window/2)) left_page = total_pages - page_window;
                if (left_page < 0) left_page = 0;
                if (left_page > 0) html += '<a href="' + url + '" class="' + ((current_page == left_page)? wclass:'') + '" data-page=0">1</a> ... ';

                var right_page = left_page + page_window;
                if (right_page > total_pages -1) right_page = total_pages -1;

                for (i=left_page; i<right_page; i++) {
                    html += '<a href="' + url + '" data-page=' + i + '" class="' + ((current_page == i)? wclass:'') + '">' + (i+1) + '</a>';
                }

                if (right_page < total_pages -1) html += ' ... ';
                html += '<a href="' + url + '" data-page=' + (total_pages -1) + '" class="' + ((current_page == right_page)? wclass:'') + '">' + (total_pages) + '</a>';

                element.html(html);
                if (!call) return;

                for (i=0; i<element.children().length; i++) {
                    angular.element(element.children()[i]).bind('click', scope.searchReps);
                }
            };
        }
    };
});
