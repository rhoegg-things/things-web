var thingsServices = angular.module('thingsServices', ['config', 'ngResource']);

thingsServices.factory('Equipment', ['$resource', 'equipmentApi', function($resource, equipmentApi) {
    console.log("Configured with equipment API " + equipmentApi);
    return $resource(equipmentApi, {}, {
        query: {
            method: 'GET'
        }
    });
}]);

thingsServices.factory('People', ['$resource', 'peopleApi', function($resource, peopleApi) {
    console.log("Configured with people API " + peopleApi);
    return $resource(peopleApi, {}, {
        query: {
            method: 'GET'
        }
    });
}]);