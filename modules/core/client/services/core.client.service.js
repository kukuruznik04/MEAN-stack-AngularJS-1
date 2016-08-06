'use strict';

angular
    .module('ContactsApp')
    .factory('ContactService', function ($http) {

        var _contacts = function () {
            var promise = $http.get('/api/contact');
            return promise;
        };

        return {getContacts: _contacts}

    })
    .factory('SaveService', ['$http', function ($http) {

        var _save = function (user) {
            var promise = $http.post('/api/contact', user);
            return promise;
        };

        return {saveContacts: _save}

    }])
    .factory('UpdateService', function ($http) {

        var _update = function (user, id) {
            var promise = $http.put('/api/contact/' + id, user);
            return promise;
        };

        return {updateContacts: _update}

    })
    .factory('DeleteService', function ($http) {

        var _delete = function (id) {
            var promise = $http.delete('/api/contact/' + id);
            return promise;
        };

        return {deleteContacts: _delete}

    })
    .factory('TableService', function ($http) {

        var _contacts = function () {
            var promise = $http.get('/api/contact');
            return promise;
        };

        var _save = function (user) {
            var promise = $http.post('/api/contact', user);
            return promise;
        };

        var _update = function (user, id) {
            var promise = $http.put('/api/contact/' + id, user);
            return promise;
        };

        var _delete = function (id) {
            var promise = $http.delete('/api/contact/' + id);
            return promise;
        };

        return {
            getContacts: _contacts,
            saveContacts: _save,
            updateContacts: _update,
            deleteContacts: _delete
        }

    });