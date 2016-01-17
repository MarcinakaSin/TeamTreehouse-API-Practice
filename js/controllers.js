'use strict';

var controllers = angular.module('movies.controllers', []);

var apiKey = 'INSERT API KEY HERE';


controllers.controller('MovieListCtrl', function ($scope, $routeParams, $http) {

	console.log($routeParams);
	var path = $routeParams.list;
	$scope.list;
	//var path = 'now_playing';
	$scope.url = 'https://api.themoviedb.org/3/movie/' + path + '?api_key=' + apiKey + '&append_to_response=images,releases,trailers&language=en&include_image_language=en,null&callback=JSON_CALLBACK';
	$http.jsonp($scope.url).then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
});

controllers.controller('MovieCtrl', function ($routeParams, $scope, $http) {

	console.log($routeParams);
	var path = $routeParams.id;
	$scope.movie;
	//var path = 'now_playing';
	$scope.url = 'https://api.themoviedb.org/3/movie/' + path + '?api_key=' + apiKey + '&append_to_response=images,releases,trailers&language=en&include_image_language=en,null&callback=JSON_CALLBACK';
	$http.jsonp($scope.url).then(function (data){
		$scope.movie = data.data;
		console.log(data);
	});
});