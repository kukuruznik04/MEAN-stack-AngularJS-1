'use strict';

angular
    .module('ContactsApp')
    .filter('ContactFilter', function () {

        return function (input) {
            input = input[0].toUpperCase() + input.slice(1);
            return input;
        };
    })