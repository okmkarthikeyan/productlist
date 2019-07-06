angular.module('productlist.controllers',[])
.controller('MasterCrtl', ['$scope','$state','$timeout',
function($scope,$state,$timeout){

    $scope.init = function(){
        $state.go("movieList");
    }
    $timeout($scope.init);
}]);