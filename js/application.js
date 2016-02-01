$(document).foundation();

var thingsApp = angular.module('thingsApp', ['thingsServices']);

thingsApp.controller('equipmentController', ['$scope', 'Equipment', function($scope, Equipment) {
    $scope.equipment = Equipment.query();
}]);
var thingsServices = angular.module('thingsServices', ['config', 'ngResource']);

thingsServices.factory('Equipment', ['$resource', 'equipmentApi', function($resource, equipmentApi) {
    console.log("Configured with equipment API " + equipmentApi);
    return $resource(equipmentApi, {}, {
        query: {
            method: 'GET'
        }
    });
}]);