var thingsServices = angular.module('thingsServices', ['ngResource']);

thingsServices.factory('Equipment', ['$resource', 'equipmentApi', function($resource, equipmentApi) {
    return $resource(equipmentApi + '/fake-data.json', {}, {
        query: {
            method: 'GET'
        }
    });
}]);