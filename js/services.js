'use strict';

var services = angular.module('movie.services', []);

services.factory('movies', function( $http ){


	function load(path, params) {
		params = params || {};
	    params.api_key = 'API KEY HERE';
		params.callback = "JSON_CALLBACK";
		params.append_to_response = "images,trailers";
		params.language = "en";
		params.include_image_language = "en,null";
		return $http.jsonp('https://api.themoviedb.org/3/movie/' + path, { params: params });
	}

	return {
		list: function(type, params) {
			return load(type, params);
		},
		movie: function(type) {
			return load(type);
		}
	}
});