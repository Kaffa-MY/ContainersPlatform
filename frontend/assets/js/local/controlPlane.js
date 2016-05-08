var app = angular.module("ctrlPlane", []);
app.controller("planeCtrl", function($scope) {
    $scope.showModule = function(module){
        switch(module){
            case 1:
                $scope.registryUI = true;
                $scope.resourceMonitor = false;
                break;
            case 2:
                $scope.registryUI = false;
                $scope.resourceMonitor = true;
            default:
                break;
        }
    };
});