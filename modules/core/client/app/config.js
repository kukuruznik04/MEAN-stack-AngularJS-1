'use strict';

var ApplicationConfiguration = (function(){

    var _applicationModuleName = 'ContactsApp';

    var _applicationDependencies = ['ui.router'];

    var _registerModule = function(moduleName, dependencies){

        //create Angular module
        angular.module(_applicationModuleName, dependencies || []);

        angular.module(_applicationModuleName).requires.push(moduleName);
    }

    return {
        applicationModuleName: _applicationModuleName,
        applicationDependencies: _applicationDependencies,
        registerModule: _registerModule
    }

})();