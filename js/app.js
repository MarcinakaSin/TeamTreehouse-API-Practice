"use strict";

var app = angular.module('moviesdb', ['movies.controllers']);

app.config(function($routeProvider) {
	//	when("listens for right", {"defines controller", "defines view file"})
	$routeProvider
	.when("/movie/:id", { controller: "MovieCtrl", templateUrl: "partials/movie.html" })
	.when( "/:list", { controller: "MovieListCtrl", templateUrl: "partials/movie_list.html" })
	.otherwise({ redirectTo: "/now_playing" });
});