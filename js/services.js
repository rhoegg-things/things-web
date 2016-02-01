var thingsServices = angular.module('thingsServices', ['ngResource']);

thingsServices.factory('Equipment', ['$resource', function($resource) {
    return $resource('fake-data.json', {}, {
        query: {
            method: 'GET'
        }
    });
}]);