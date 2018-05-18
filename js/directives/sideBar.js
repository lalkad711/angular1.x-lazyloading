'use strict';

define([], function () {

    return ['sideBar', function () {
		return {
			  controller: ['SidebarJS', function _controller(SidebarJS) {
				  this.toggleSidebarJS = toggleSidebarJS;
				  this.sidebarIsVisible = isVisibleSidebarJS;
				  this.onSidebarOpen = onSidebarOpen;
				  this.onSidebarClose = onSidebarClose;
				  this.changePosition = changePosition;
				  this.message = 'test message';

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
				}],
			  controllerAs: 'app',
			  templateUrl: '../../partials/sideBar.template.html',
			  restrict:'E'
			}
	}]
})
