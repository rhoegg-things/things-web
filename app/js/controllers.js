var thingsApp = angular.module('thingsApp', ['config', 'thingsServices']);

thingsApp.controller('equipmentController', ['$scope', 'Equipment', function($scope, Equipment) {
    $scope.equipment = Equipment.query();
}]);