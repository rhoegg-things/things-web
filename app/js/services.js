var thingsServices = angular.module('thingsServices', ['config', 'ngResource']);

thingsServices.factory('Equipment', ['$resource', 'equipmentApi', function($resource, equipmentApi) {
    console.log("Configured with equipment API " + equipmentApi);
    return $resource(equipmentApi, {}, {
        query: {
            method: 'GET'
        }
    });
}]);