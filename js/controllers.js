'use strict';

var controllers = angular.module('movies.controllers', []);



controllers.controller('MovieListCtrl', function ($scope, movies, $routeParams) {

	var validLists = ['now_playing', 'popular', 'top_rated', 'upcoming'];
	var list = $routeParams.list.toLowerCase();

	if(validLists.indexOf(list) > -1) {
		movies.list(list).then(function (data){
			console.log(data);
			$scope.list = data.data;
			
		});
	} else { 
		window.location.href = '#/now_playing';
	}

			
	$scope.loadNextPage = function() {
		movies.list(list, { page: $scope.list.page + 1 }).then(function(data) {
			//	if we wanted to replace the data on the page instead of concatinating.
			//$scope.list = data.data;
			//	updating list.page value.
			$scope.list.page = data.data.page;
			//	concatinating results from second page onto the first pages results.
			$scope.list.results = $scope.list.results.concat(data.data.results);
		});
	}
});

controllers.controller('MovieCtrl', function ($routeParams, movies, $scope) {
	var id = $routeParams.id;

	
	movies.list(id).then(function (data){
		$scope.movie = data.data;
		console.log(data);
	});
});