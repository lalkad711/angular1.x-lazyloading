'use strict';

define([], function () {

	function _controller($scope, $mdDialog) {
		
		//$scope.$emit('updateCSS', ['css/css1.css','css/angular-sidebarjs.min.css']);
		
		$scope.customFullscreen = true;
		
		$scope.openJourneyModal = function(ev) {
		    $mdDialog.show({
		        controller: 'journeyDailogController',
		        templateUrl: '../partials/dailog1.tpl.html',
		        parent: angular.element(document.body),
		        targetEvent: ev,
		        clickOutsideToClose:true,
		        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		      })
		      .then(function(answer) {
		        $scope.status = 'You said the information was "' + answer + '".';
		      }, function() {
		        $scope.status = 'You cancelled the dialog.';
		      });
		    };
	}
	
	return _controller;
});
