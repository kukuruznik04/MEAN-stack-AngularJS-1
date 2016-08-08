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
    .controller('UpdateController', ['$scope', 'contactId', 'UpdateService', function ($scope, contactId, UpdateService) {

        var populateFields = function () {

            var editPromise = UpdateService.editContact(contactId);


            var successCallBack = function (response) {
                $scope.contact = response;
            }

            var failureCallBack = function (err) {
                $scope.message = err;
            };

            editPromise
                .success(successCallBack)
                .error(failureCallBack);


        }
        if (contactId)
            populateFields();

        $scope.update = function (user, id) {

            var updatePromise = TableService.updateContacts(user, id);

            var successCallBack = function (response) {
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            updatePromise
                .success(successCallBack)
                .error(failureCallBack);


        };

    }])
    .controller('DeleteController', function ($scope, DeleteService) {

        $scope.delete = DeleteService.deleteContacts;

    })
    .controller('LoginController', function ($scope, LoginService) {

        // TODO: your code here
        $scope.login = LoginService.loginContacts;

    })
    .controller('TableController', ['$scope', 'TableService', '$state', function ($scope, TableService, $state) {

        // Display Table

        var displayTable = function () {
            var contactsPromise = TableService.getContacts();

            var successCallback = function (response) {


                var contacts = {};

                contacts = response;


                $scope.contacts = contacts;
                $scope.fields = Object.keys($scope.contacts[0] || []);

            }

            var failureCallback = function (err) {
                console.log("Error while fetching contacts");
            }

            contactsPromise
                .success(successCallback)
                .error(failureCallback);
        }
        displayTable();

        // Save

        $scope.save = function (user) {

            var savePromise = TableService.saveContacts(user);

            var successCallBack = function (response) {
                displayTable();
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            savePromise
                .success(successCallBack)
                .error(failureCallBack);


        };

        // update contact

        $scope.update = function (user, id) {

            var updatePromise = TableService.updateContacts(user, id);

            var successCallBack = function (response) {
                displayTable();
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            updatePromise
                .success(successCallBack)
                .error(failureCallBack);


        };

        // Delete

        $scope.delete = function (id) {

            var deletePromise = TableService.deleteContacts(id);

            var successCallBack = function (response) {
                displayTable();
                $scope.message = response;
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            deletePromise
                .success(successCallBack)
                .error(failureCallBack);


        };

        $scope.editContact = function (contact) {
            $state.go('update', {contactId: contact._id});
        }


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