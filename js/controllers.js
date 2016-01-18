'use strict';

var controllers = angular.module('movies.controllers', []);



controllers.controller('MovieListCtrl', function ($scope, movies, $routeParams) {

	var list = $routeParams.list;
	movies.list(list).then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
});

controllers.controller('MovieCtrl', function ($routeParams, movies, $scope) {
	var id = $routeParams.id;

	
	movies.list(id).then(function (data){
		$scope.movie = data.data;
		console.log(data);
	});
});