angular.module('productlist.controllers')
.controller('indivdualItemCtrl', ['$scope','$state','$interval','networkService','sharedInfoService','Notification','$timeout','uiGridConstants',
 function($scope,$state,$interval,networkService,sharedInfoService,Notification,$timeout,uiGridConstants) {
    $scope.data = [];

$scope.init = function(){
    getIndivdualItemData();
}
$timeout($scope.init);
var getIndivdualItemData = function(){
    var item = sharedInfoService.getindividualItemId();
var response = networkService.getSingleMovieList(item);
response.then(function(result) {
    console.log(result);
    $scope.data = result;
    
});
}

 }]);