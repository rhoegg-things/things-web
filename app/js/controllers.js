var thingsApp = angular.module('thingsApp', ['thingsServices']);

thingsApp.controller('equipmentController', ['$scope', 'Equipment', function($scope, Equipment) {
    $scope.equipment = Equipment.query();
}]);