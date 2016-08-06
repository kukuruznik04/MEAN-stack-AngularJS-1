'use strict';

angular
    .module('ContactsApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        // $stateProvider, $urlRouterProvider coming from angular-ui-router

        $stateProvider
            .state('display', {
                url: '/display',
                templateUrl: 'modules/core/client/views/display.core.tpl.html'
            })
            .state('create', {
                url: '/create',
                templateUrl: 'modules/core/client/views/create.core.tpl.html'
            })
            .state('update', {
                url: '/update',
                templateUrl: 'modules/core/client/views/update.core.tpl.html'
            })
            .state('delete', {
                url: '/delete',
                templateUrl: 'modules/core/client/views/delete.core.tpl.html'
            })
            .state('table', {
                url: '/table',
                templateUrl: 'modules/core/client/views/table.core.tpl.html'
            });

    })