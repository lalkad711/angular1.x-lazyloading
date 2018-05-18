'use strict';

define([ 'app', 'route-config' ],

function(app, routeConfig) {

	return app.config(function($stateProvider, $urlRouterProvider, $qProvider) {

		$qProvider.errorOnUnhandledRejections(false);

		$urlRouterProvider.otherwise('/home/start');
		
		$stateProvider.state('home', {
			abstract : true,
			url : "/home",
			templateUrl: '../partials/main_container/mainContainer.html'
		}).state('home.start', {
			url : '/start',
			views : {
				'sidebar1' : routeConfig.config('../partials/view1.html', 'controllers/first', {
					 directives: ['directives/avatar'],
					 services: [],
					 filters: []
					 }),
				'sidebar2' : routeConfig.config('../partials/dailog1.tpl.html', 'controllers/journeyDailogController', {
					 directives: [],
					 services: [],
					 filters: []
					 }),
				'content' : {
					templateUrl : '../partials/view1.html',
					controller: 'first',
					sticky: true
				}
			}
		}).state('home.customer', {
			url : '/customer/:store',
			views : {
				'sidebar1' : routeConfig.config('../partials/customerLanding.html', 'controllers/customerLandingController', {
					 directives: ['directives/avatar'],
					 services: [],
					 filters: []
					 }),
				'content' : {
					templateUrl : '../partials/customerLanding.html',
					controller: 'customerLandingController',
					sticky: true
				},
				'sidebar' : {
					templateUrl : '../partials/mainSideNav.html',
					sticky: true
				}
			}
		}).state('home.customerInfo', {
			url : '/customerInfo/:store',
			views : {
				'sidebar1' : routeConfig.config('../partials/customerInfo.html', 'controllers/customerInfoController', {
					 directives: ['directives/sideMenu','directives/avatar'],
					 services: ['services/beeKeeperService'],
					 filters: []
					 }),
				'content' : {
					templateUrl : '../partials/customerInfo.html',
					controller: 'customerInfoController',
					sticky: true
				},
				'sidebar' : {
					templateUrl : '../partials/customerInfoSideNav.html',
					controller: 'customerInfoController',
					sticky: true
				}
			}
		}).state('home.customerCoverage', {
			url : '/coverage/:store',
			views : {
				'sidebar1' : routeConfig.config('../partials/CustomerCoverage.html', 'controllers/customerCoverageController', {
					 directives: ['directives/avatar'],
					 services: ['services/beeKeeperService'],
					 filters: []
					 }),
				'content' : {
					templateUrl : '../partials/CustomerCoverage.html',
					controller: 'customerCoverageController',
					sticky: true
				},
				'sidebar' : {
					templateUrl : '../partials/customerCoverageSideNav.html',
					controller: 'customerCoverageController',
					sticky: true
				}
			}
		}).state('home.deivceDetail', {
			url : '/deviceDetail/:store',
			views : {
				'sidebar1' : routeConfig.config('../partials/deviceDetail.html', 'controllers/deviceDetailController', {
					 directives: ['directives/sideMenu','directives/avatar'],
					 services: ['services/beeKeeperService'],
					 filters: []
					 }),
				'content' : {
					templateUrl : '../partials/deviceDetail.html',
					controller: 'deviceDetailController',
					sticky: true
				},
				'sidebar' : {
					templateUrl : '../partials/deviceDetailSideNav.html',
					controller: 'deviceDetailController',
					sticky: true
				}
			}
		})
	});
});
