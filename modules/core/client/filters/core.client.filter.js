'use strict';

angular
    .module('ContactsApp')
    .filter('ContactFilter', function () {
        var _fields = function (fields) {
            fields = fields || [];
            if (fields)
            for (var i = 0; i < fields.length; i++) {
                fields[i].charAt(0).toUpperCase();
            }
            return fields;
        }

        return {getFields: _fields}
    })
