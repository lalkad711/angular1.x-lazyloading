'use strict';

define([], function () {
	
	function _controller($scope, tester) {
		
		//$scope.$emit('updateCSS', ['css/css2.css','css/angular-sidebarjs.min.css','css/demo.css']);

		$scope.message = "I'm the 2nd controller! "  + tester;
				$scope.test = $scope.test || 0;
		
		$scope.testfunction = function()
		{
			$scope.test++;
		}
	}

	return _controller;
});
