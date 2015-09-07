'use strict'
var app = angular.module('myApp',['ngRoute', 'satellizer']);

app.config(['$routeProvider',function($routeProvider, $locationProvider, $authProvider){

  $authProvider.loginUrl = '/auth/login';
  $authProvider.signupUrl = '/auth/signup';
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'myApp';


	$routeProvider.
	when('/public',{
		templateUrl:'app/views/view.html',
		controller:'viewController'
	}).
	otherwise({
		redirectTo: '/public'
	});
}]);
