'use strict';

angular
    .module('ContactsApp')
    .controller('ContactsController', function ($scope, ContactService) {
        // $scope - dependency injection, controller and view talks through scope (2 way data binding)

        var contactsPromise = ContactService.getContacts();

        var successCallback = function (response) {
            $scope.contacts = response;
            $scope.fields = Object.keys($scope.contacts[0] || []);

        }

        var failureCallback = function (err) {
            console.log("Error while fetching contacts");
        }

        contactsPromise
            .success(successCallback)
            .error(failureCallback);


    })
    .controller('SaveController', function ($scope, SaveService) {

        $scope.save = SaveService.saveContacts;

    })
    .controller('UpdateController', function ($scope, UpdateService) {

        $scope.update = UpdateService.updateContacts;

    })
    .controller('DeleteController', function ($scope, DeleteService) {

        $scope.delete = DeleteService.deleteContacts;

    })
    .controller('LoginController', function ($scope, LoginService) {

        // TODO: your code here
        $scope.login = LoginService.loginContacts;

    })
    .controller('TableController', ['$scope', 'TableService', 'ContactFilter', function ($scope, TableService, ContactFilter) {

        var contactsPromise = TableService.getContacts();

        var successCallback = function (response) {


            var contacts = {};

            contacts = response;


            $scope.contacts = contacts;
            $scope.fields = ContactFilter.getFields(Object.keys($scope.contacts[0] || []));
            // $scope.fields = Object.keys($scope.contacts[0] || []);

        }

        var failureCallback = function (err) {
            console.log("Error while fetching contacts");
        }

        contactsPromise
            .success(successCallback)
            .error(failureCallback);

        $scope.save = TableService.saveContacts;

        $scope.update = TableService.updateContacts;

        $scope.delete = TableService.deleteContacts;

    }])


// contacts = contacts.map(function (contact) {
//     if (contact && contact['_id']) {
//         delete contact['_id'];
//         delete contact['__v'];
//     }
//
//     return contact;
// })

// Mine
// angular
//     .module('ContactsApp')
//     .controller('ContactsController', ['$scope', '$http', function ($scope, $http) {
//         // $scope - dependency injection, controller and view talks through scope (2 way data binding)
//
//         $scope.contacts = [
//             {}
//         ];
//         $scope.fields = [];
//
//         $http({
//             method: 'GET',
//             url: '/api/contact'
//         }).then(function successCallback(response) {
//             $scope.contacts = response.data;
//             $scope.fields = Object.keys($scope.contacts[0] || []);
//         }, function errorCallback(response) {
//
//         });
//     }])
//     .controller('SaveController', function ($scope, $http) {
//
//         $scope.save = function(user) {
//             $http({
//                 method: 'POST',
//                 url: '/api/contact',
//                 data: user
//                 // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
//             }).then(function successCallback(response) {
//                 $scope.result = response;
//             }, function errorCallback(response) {
//                 $scope.result = response;
//             });
//         }
//
//     })
//     .controller('UpdateController', function ($scope, $http) {
//
//         $scope.update = function(user, id) {
//             $http({
//                 method: 'PUT',
//                 url: '/api/contact/'+id,
//                 data: user
//                 // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
//             }).then(function successCallback(response) {
//                 $scope.result = id;
//             }, function errorCallback(response) {
//                 $scope.result = id;
//             });
//         }
//
//     })
//     .controller('DeleteController', function ($scope, $http) {
//
//         $scope.delete = function(id) {
//             $http({
//                 method: 'DELETE',
//                 url: '/api/contact/'+ id
//                 // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
//             }).then(function successCallback(response) {
//                 $scope.result = $scope.indexOfContact;
//             }, function errorCallback(response) {
//                 $scope.result = $scope.indexOfContact;
//             });
//         }
//
//     })