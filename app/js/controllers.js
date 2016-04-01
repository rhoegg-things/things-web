var thingsApp = angular.module('thingsApp', ['thingsServices']);

thingsApp.controller('equipmentController', ['$scope', 'Equipment', function($scope, Equipment) {
    $scope.equipment = Equipment.query();
}]);

thingsApp.controller('peopleController', ['$scope', 'People', function($scope, People) {
    $scope.people = People.query();
}]);