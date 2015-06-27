'use strict'
var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider,$locationProvider){
	$routeProvider.
	when('/public',{
		templateUrl:'app/views/view.html',
		controller:'viewController'
	}).
	otherwise({
		redirectTo: '/public'
	});
}]);
