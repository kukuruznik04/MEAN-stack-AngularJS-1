'use strict';

angular
    .module('ContactsApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        // $stateProvider, $urlRouterProvider coming from angular-ui-router

        $stateProvider
            .state('display', {
                url: '/display',
                templateUrl: 'modules/core/client/views/display.core.tpl.html'
            });

    })