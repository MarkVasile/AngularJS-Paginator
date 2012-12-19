var balfour_filters = angular.module('balfour.filter', []).

    filter('filterLabel', function() {
        return function(text) {
            if (!text) return;
            var display_strings = {
                'id'            : 'Rep ID',
                'friendly_name' : 'Friendly Name',
                'first_name'    : 'First Name',
                'middle_name'   : 'Middle Name',
                'last_name'     : 'Last Name',
                'address1'      : 'Address Line 1',
                'address2'      : 'Address Line 2',
                'address3'      : 'Address Line 3',
                'city'          : 'City',
                'state'         : 'State',
                'zip'           : 'Zip Code',
                'email'         : 'Email Address',
                'fax'           : 'Fax Number',
                'phone1'        : 'Phone Number 1',
                'phone2'        : 'Phone Number 2',
                'office'        : 'Office'
            }
            var out = [];
            for (label in display_strings) {
                var line = {};
                line.label = display_strings[label];
                line.value = text[label];
                out.push(line);
            }

            return out;
        }
    });
