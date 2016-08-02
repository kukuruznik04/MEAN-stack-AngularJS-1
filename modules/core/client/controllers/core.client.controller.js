'use strict';

angular
    .module('ContactsApp')
    .controller('ContactsController', function ($scope, $http) {
        // $scope - dependency injection, controller and view talks through scope (2 way data binding)

        $scope.contacts = [
            {}
        ];
        $scope.fields = [];

        $http({
            method: 'GET',
            url: '/api/contact'
        }).then(function successCallback(response) {
            $scope.contacts = response.data;
            $scope.fields = Object.keys($scope.contacts[0] || []);
        }, function errorCallback(response) {

        });
    })
    .controller('SaveController', function ($scope, $http) {

        var contacts = {};
        $scope.save = function(user) {
            contacts = {"email": $scope.user.email, "lastname": $scope.user.lastname, "firstname": $scope.user.firstname};
            console.log(contacts);
            $http({
                method: 'POST',
                url: '/api/contact'
            }, contacts).then(function successCallback(response) {
                $scope.result = "Success"
            }, function errorCallback(response) {
                $scope.result = "Fail"
            });
        }
        //console.log(contacts);

    })
    .controller('UpdateController', function ($scope) {

    })
    .controller('DeleteController', function ($scope) {

    })