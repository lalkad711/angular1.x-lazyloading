'use strict';

requirejs.config({
	baseUrl:'js',

	paths:{
		
		'text': '../lib/require/text',
		'jquery': '../lib/jquery/jquery',
		'jquery-ui': '../lib/jquery/jquery-ui-1.10.2.min',
		'angular': '../lib/angular/angular',
		'ngRoute': '../lib/angular/angular-route.min',
		'ngSidebarJS': '../lib/custom/angular-sidebarjs',
		'library': '../lib',
		'ui.router' : '../lib/angular/angular-ui-router.min',
		'ngAria':'../lib/angular/angular-aria',
		'ngAnimate':'../lib/angular/angular-animate',
		'ngMaterial':'../lib/angular/angular-material',
		'ngMessages':'../lib/angular/angular-messages',
		'environment':'common/Environment'
	},
	
	shim:{
		'angular':{
//			deps:['jquery'],
			exports:'angular'
		},
//		'jquery-ui': {
//			deps: ['jquery'] 
//		},
		'app':{
			deps:['angular']
		},
		'routes':{
			deps:['angular']
		},
		'ngSidebarJS':{
			deps:['angular'],
			exports:'ngSidebarJS'
		},
		'ngRoute':{
			deps:['angular']
		},
		'ui.router':{
			deps:['angular']
		},
		'ngMaterial':{
			deps:['angular','ngAria', 'ngAnimate']
		}
	}
});



requirejs( [
		'text',
		'jquery',
		'angular',
//		'jquery-ui',
		'app', //app.js
		'routes' //routes.js
	],

	function (text, $, angular) {
		$(document).ready(function () {			
			angular.bootstrap(document, ['myApp']);
			
		});
		
	}
);
