'use strict';

// Declare the requireJS module - [myApp Angular Module]
define([
		'angular',
		'route-config',
		'ngSidebarJS',
		'ngRoute',
		'ui.router',
		'ngMaterial',
		'ngMessages'
	],

	function (angular, routeConfig) {

		var app = angular.module('myApp', ['ngSidebarJS', 'ngRoute', 'ui.router', 'ui.state', 'ngMessages', 'ngMaterial'], function ($provide, $compileProvider, $controllerProvider, $filterProvider, $mdIconProvider) {

			routeConfig.setProvide($provide); //for services
			routeConfig.setCompileProvider($compileProvider);  //for directives
			routeConfig.setControllerProvider($controllerProvider); //for controllers
			routeConfig.setFilterProvider($filterProvider); //for filters
			
			 $mdIconProvider
		      .iconSet('core', 'resources/core-icons.svg',24)
		      .iconSet('social', 'resources/social-icons.svg',24)
			  .iconSet('action', 'resources/action-symbol.svg',24)
			  .iconSet('communication', 'resources/communication-icons.svg',24);
		});
		
		app.controller('CommonController', function($scope, $interval, $mdDialog) {
			
			$scope.progressCircular = true;
			
		      var determinateValue = 30;

		      // Iterate every 100ms, non-stop and increment
		      // the Determinate loader.
		      $interval(function() {

		    	determinateValue += 1;
		        if (determinateValue > 100) {
		        	determinateValue = 30;
		        }

		      }, 100);
		      
			function openProgressBar(ev){
				    $mdDialog.show({
				        templateUrl: '../partials/progressDialog.tpl.html',
				        parent: angular.element(document.body),
				        targetEvent: ev,
				        clickOutsideToClose:false,
				        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
				      })
			}
			
			function closeProgressBar(ev){
			    $mdDialog.hide();
			}  
			
			$scope.$on('updateCSS', function(event, args) {
				$scope.stylesheets = args;
			});
			$scope.$on('updateProgressCircular', function(event, args) {
				if($scope.progressCircular){
					openProgressBar();
					$scope.progressCircular = false;
				}else{
					$scope.progressCircular = true;
					closeProgressBar();
				}
			});
		});	
			
		
		return app; 
 	}
);
