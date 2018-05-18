'use strict';

define([], function () {

	function _controller($scope, SidebarJS) {
		
		$scope.$emit('updateCSS', ['css/angular-sidebarjs.min.css','css/demo.css']);
		
		$scope.message = "I'm the 1st controller!";
		$scope.greeting = "Hello world!";	
		
		inti = function(){
			
		}

		$scope.toggleSidebarJS = toggleSidebarJS;
		$scope.sidebarIsVisible = isVisibleSidebarJS;
		$scope.onSidebarOpen = onSidebarOpen;
		$scope.onSidebarClose = onSidebarClose;
		$scope.changePosition = changePosition;

		  function toggleSidebarJS(sidebarName) {
			  SidebarJS.toggle(sidebarName);
		  }

		  function isVisibleSidebarJS(sidebarName) {
		    return SidebarJS.isVisible(sidebarName);
		  }

		  function onSidebarOpen() {
		    console.log('is open!');
		  }

		  function onSidebarClose() {
		    console.log('is close!');
		  }

		  function changePosition(newPosition) {
		    SidebarJS.setPosition(newPosition);
		  }
	}
	
	return _controller;
});
