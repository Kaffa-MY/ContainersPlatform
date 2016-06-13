var app = angular.module("ctrlPlane", []);
app.controller("planeCtrl", function($scope) {
    $scope.showModule = function(module){
        switch(module){
            case 1:
                $scope.registryUI = true;
                $scope.resourceMonitor = false;
                $scope.ambari = false;
                $scope.ambariAuto = false;
                $scope.ambariManual = false;
                $scope.serviceStatus = false;
                break;
            case 2:
                $scope.registryUI = false;
                $scope.resourceMonitor = true;
                $scope.ambari = false;
                $scope.ambariAuto = false;
                $scope.ambariManual = false;
                $scope.serviceStatus = false;
                break;
            case 3:
                $scope.registryUI = false;
                $scope.resourceMonitor = false;
                $scope.ambari = true;
                $scope.ambariAuto = false;
                $scope.ambariManual = false;
                $scope.serviceStatus = false;
                break;
            case 4:
                $scope.registryUI = false;
                $scope.resourceMonitor = false;
                $scope.ambari = false;
                $scope.ambariAuto = true;
                $scope.ambariManual = false;
                $scope.serviceStatus = false;
                break;
            case 5:
                $scope.registryUI = false;
                $scope.resourceMonitor = false;
                $scope.ambari = false;
                $scope.ambariAuto = false;
                $scope.ambariManual = true;
                $scope.serviceStatus = false;
                break;
            case 6:
                $scope.registryUI = false;
                $scope.resourceMonitor = false;
                $scope.ambari = false;
                $scope.ambariAuto = false;
                $scope.ambariManual = false;
                $scope.serviceStatus = true;
                break;
            default:
                break;
        }
    };
});