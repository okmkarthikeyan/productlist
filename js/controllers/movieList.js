angular.module('productlist.controllers')
.controller('MovieListCtrl', ['$scope','$state','$interval','networkService','sharedInfoService','Notification','$timeout','uiGridConstants',
 function($scope,$state,$interval,networkService,sharedInfoService,Notification,$timeout,uiGridConstants) {
    $scope.data = [];
    var gridOptions = {
        data: 'data',
        enableColumnResizing: true,
        enableFiltering: true,
        enableSorting: true,
        useExternalFiltering: false,
        enableGridMenu: false,
        enableColumnMenus: false,
        showGridFooter: false,
        showColumnFooter: false,
        enableRowHeaderSelection: false,
        enableRowSelection: false,
        paginationPageSizes: [5, 10, 15],
        paginationPageSize: 15,
        autoResize: true,
        exporterMenuPdf: true,
        exporterMenuCsv: true
    }
    $scope.gridOptions = gridOptions;
    $scope.gridOptions.onRegisterApi = function(gridApi) {
        $scope.gridApi = gridApi;
        $scope.gridApi.core.handleWindowResize();
    	gridApi.core.on.rowsRendered($scope, function() {
    	});
	}


$scope.init = function(){
    getMovieListData();
}
$timeout($scope.init);
var getMovieListData = function(){

var response = networkService.getMovieList();
response.then(function(result) {
    console.log(result);
    formGridData(result);
});
}

var formGridData = function(data) {
    var gridData = [];
    gridData = data.Search;

    
    var actionIcon = '<div class="texthyperlink"ng-click="grid.appScope.indivdualItemClick(row.entity.imdbID)">{{row.entity.Title}}</div>';
    var posterImg = '<div><img src="{{row.entity.Poster}}" class="imgsizeGrid"/></div>';
    $scope.data = gridData;
        $scope.gridOptions = {
            data: $scope.data,
            columnDefs: [
                { field: 'Title', cellTemplate: actionIcon, displayName: 'Title',width: "*", visible: true,
                 enableCellEdit: false, enableSorting: false, enableFiltering: true},
                { field: 'Type', displayName: 'Type', width: "*",visible: true,
                 enableCellEdit: false, enableSorting: false, enableFiltering: true},
                { field: 'Year', displayName: 'Year', width: "*",visible: true,
                 enableCellEdit: false, enableSorting: false, enableFiltering: true, visible: true},
                /*{ field: 'Poster',cellTemplate: posterImg,displayName: 'Poster', width: "*",visible: true,
                 enableCellEdit: false, enableSorting: false, enableFiltering: true, visible: true},*/
                ]
        };
    };

    $scope.indivdualItemClick = function(rowid){
        console.log(rowid);
        sharedInfoService.setindividualItemId(rowid);
        $state.go("indivdualItemView");
    }

 }]);