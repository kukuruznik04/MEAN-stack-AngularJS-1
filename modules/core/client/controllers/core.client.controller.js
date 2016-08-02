'use strict';

angular
    .module('ContactsApp')
    .controller('ContactsController', function ($scope) {
        // $scope - dependency injection, controller and view talks through scope (2 way data binding)

        $scope.contacts =
            [
                {
                    "_id": "57928ef89d6a4b51398c8dfd",
                    "__v": 0,
                    "email": "a12dfghssaa@email.com",
                    "lastname": "Bradley12fdg",
                    "firstname": "Mike12sdfaa"
                },
                {
                    "_id": "579290da9ee8a27239acea17",
                    "__v": 0,
                    "email": "a2343456@email.com",
                    "lastname": "Bradley4567",
                    "firstname": "Mike3456"
                }
            ]
        $scope.fields = $scope.contacts[0];

    })