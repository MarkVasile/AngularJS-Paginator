AngularJS Paginator
===================
*author: Marian Vasile, Dec 2012*

This component paginates an ajax database service, with a single HTML
line, and some CSS.

Steps for integration:

1. In your listing HTML file add this line to the top and the bottom of
   the actual listing div or table

    ```
    <paginator current-page="{{ listing.current_page }}" total_pages="{{ listing.total_pages }}" call="searchListing" wclass="current_page"></paginator>
    ```

2. Adjust the code in your Angular controller for the paginator scope
   (the same scope as the listing itself) to pass the page to $resource

    - see the repapp-controller.js for instructions

3. On the services side make sure to return the listing in this JSON format:
    ```
    {"current_page": 0,
    "total_pages": 14,
    "rows": [{
        {<your_data_here},
        {<your_data_here}
    }] }
    ```

4. Modify the CSS to format the page numbers

TODO: Need to create Jasmine tests
