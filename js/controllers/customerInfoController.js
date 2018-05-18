'use strict';

define([], function () {

	function _controller($scope, $state, $stateParams, beeKeeperService, $mdDialog) {
		$scope.enableContinue = true;
		$scope.validateAddress = false;
		$scope.svgList = [{url:'communication:ic_phone_android',name:'Mobile View', activate:true},
			  {url:'action:ic_credit_card', name:'Card Payment', activate:true},
			  {url:'social:people',name:'People', activate:false},
			  {url:'core:add', name:'Add', activate:false}];
		$scope.customerDetails = function(ev) {
				$state.transitionTo('home.customerInfo');
		    };
		$scope.submit = function(myform){
			myform.$submitted = true;
			if(myform.$valid){
				myform.$submitted = true;	
				$scope.$emit('updateProgressCircular',[]);
				beeKeeperService.validateAddress(createPostBody()).then(function successCallback(response) {
                    $scope.validatedResponse = response.data;
                    $scope.message = $scope.validatedResponse.message;
                    if ($scope.message == "the address is validated") {
                    	$mdDialog.show(
                                $mdDialog.alert()
                                  .title($scope.message.toUpperCase())                                
                                  .ok('OK')
                             );                    
                    	$scope.validateAddress = true;
                        $scope.enableContinue = false;
                    }
                                      
                                       
                    $scope.$emit('updateProgressCircular',[]);
                }, function errorCallback(error) {
                    $scope.error = error;
                    $scope.$emit('updateProgressCircular',[]);
                    $mdDialog.show(
                            $mdDialog.alert()
                              .title('Some error occurred. Please try again later.')                                
                              .ok('OK')
                         ); 
                });
				
				 
				$scope.myFunc = function(){
		        	$scope.validateAddress = false;
		        	$scope.enableContinue = true;
		        	submit();		        	
		        }
				
			}
		};
		
		

		
		function createPostBody(){
            return {
                    "First_Name": $scope.firstName,
                    "Last_Name": $scope.lastName,
                    "Email": $scope.email,
                    "Phone_Number": $scope.phoneNumber,
                    "Address": $scope.address,
                    "City": $scope.city,
                    "State": $scope.state,
                    "Zip": $scope.zip

                };
		}
		$scope.states = ['MAH','UP','MP'];
		
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
