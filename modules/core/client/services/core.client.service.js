'use strict';

angular
    .module('ContactsApp')
    .factory('ContactService', function ($http) {
        
        var m = function(){
            var promise = $http.get('/api/contact');
            return promise;
        };
        
        return {getContacts: m}
        
    });