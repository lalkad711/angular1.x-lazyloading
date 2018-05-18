'use strict';

define([], function () {

	function _controller($scope, $state, $stateParams, beeKeeperService, $mdDialog) {
		$scope.addToCart = true;
		$scope.selection = 'black';
		$scope.storageOptions = ['32','64','128'];
		$scope.storage = $scope.storageOptions[0];
		
		$scope.colors = ['black','blue','rose','silver'];
		
		$scope.svgList = [{url:'communication:ic_phone_android',name:'Mobile View', activate:true},
			  {url:'action:ic_credit_card', name:'Card Payment', activate:true},
			  {url:'social:people',name:'People', activate:false},
			  {url:'core:add', name:'Add', activate:false}];
		
		$scope.iconClick = function(target){
			if(target == 'People'){
				alert('Whoa!');
			}
			console.log(target);
		}; 
		

        $scope.customerCoverage = function(ev){
        	$state.transitionTo('home.customerCoverage',{store:$stateParams.store});
        }
	}
	
	return _controller;
});
