'use strict';

define([], function () {

	function _controller($scope) {
	
		//$scope.$emit('updateCSS', []);
		
		$scope.message = "I'm the 3rd controller!";
		
		$scope.fourthController = function($scope) {
			$scope.message = "I'm the 4th controller!";
		}
	}

	return _controller;
});
