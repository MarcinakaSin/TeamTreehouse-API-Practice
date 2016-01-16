'use strict';

var controllers = angular.module('movies.controllers', []);

controllers.controller('AppCtrl', function($scope) {

});

controllers.controller('ShortListCtrl', function ($scope, $http) {
	$scope.list;

	$http.jsonp('https://api.themoviedb.org/3/movie/550?api_key=ac5d3d00a8b1abfd5439fad20e0cb342&callback=JSON_CALLBACK').then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
});