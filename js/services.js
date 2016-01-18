'use strict';

var services = angular.module('movie.services', []);

services.factory('movies', function( $http ){

	var apiKey = 'ac5d3d00a8b1abfd5439fad20e0cb342';

	function load(path, params) {
		return $http.jsonp('https://api.themoviedb.org/3/movie/' + path + '?api_key=' + apiKey + '&append_to_response=images,releases,trailers&language=en&include_image_language=en,null&callback=JSON_CALLBACK');

	}

	return {
		list: function(type) {
			return load(type);
		},
		movie: function(type) {
			return load(type);
		}
	}
});