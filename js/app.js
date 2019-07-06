var app = angular.module('productlist', ['productlist.controllers','productlist.services','ui.router','ui-notification',
'ui.grid','ui.grid.exporter','ui.grid.pagination','ui.grid.selection','ui.grid.edit','ui.grid.autoResize','ui.grid.cellNav' , 'ui.bootstrap',]);
app.config(function(NotificationProvider,$stateProvider,$urlRouterProvider,$httpProvider,$locationProvider,$qProvider) {
	$qProvider.errorOnUnhandledRejections(false);
	$urlRouterProvider.otherwise('/');
	$locationProvider.hashPrefix('');

    $stateProvider
	.state('movieList',{
		url:'/movieList',
		templateUrl:'./views/movielist.html',
		controller: 'MovieListCtrl',
	})
	$stateProvider
	.state('indivdualItemView',{
		url:'/indivdualItemView',
		templateUrl:'./views/indivdualItemView.html',
		controller: 'indivdualItemCtrl',
	})
	
});
app.run(['$rootScope','$state',function() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}]);
