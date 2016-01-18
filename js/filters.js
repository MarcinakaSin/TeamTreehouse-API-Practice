'use strict';

var filters = angular.module('movie.filters', []);

filters.filter('movieDate', function($filter){
	// passes in a value and format.
	return function(value, format) {	
		//console.log(value, format);
		//	parses the value into a date format.
		if(value) {
			value = Date.parse(value);
		}
		//	returns the filtered date value in requested existing format.
		return $filter('date')(value, format);
	}
});