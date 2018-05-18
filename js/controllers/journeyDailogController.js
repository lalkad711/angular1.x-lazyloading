'use strict';

define([], function() {

	function _controller($scope, $mdDialog, $state) {

		$scope.items = [ 'Apple', 'Samsung', 'Lenovo', 'Motorola' ];
		$scope.getSelectedText = function() {
			if ($scope.selectedItem !== undefined) {
				return $scope.selectedItem;
			} else {
				return "Please select an item";
			}
		};

		$scope.cancelJourney = function() {
			$mdDialog.cancel();
		};

		$scope.continueJourney = function(storeName) {
			$mdDialog.hide();
			$state.transitionTo('home.customer', {'store':storeName});
		};
	}

	return _controller;
});
