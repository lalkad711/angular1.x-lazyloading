'use strict';

define([], function () {

	function _controller($scope, $state, $stateParams) {
		
		//$scope.$emit('updateCSS', ['css/css1.css']);
		
		$scope.customerDetails = function(ev) {
				$state.transitionTo('home.customerInfo',{store:$stateParams.store});
		    };
	}
	
	return _controller;
});
