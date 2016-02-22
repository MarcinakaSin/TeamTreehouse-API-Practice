'use strict';

var directives = angular.module('movies.directives', []);

directives.directive('prettyphoto', function(){ 
	return function(scope, element, attrs){ 
		$("[rel^='prettyPhoto']").prettyPhoto({
			deeplinking: false,
			social_tools:''
		}); 
	} 
})