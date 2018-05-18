//'use strict';
//
//define([], function () {
//
//	function _controller($scope, $state, $stateParams, beeKeeperService, $mdDialog) {
//		$scope.enableContinue = true;
//		$scope.validateAddress = false;
//		$scope.svgList = [{url:'core:add', name:'Add'},
//			  {url:'resources/ic_phone_android_black_24px.svg',name:'Mobile View'},
//			  {url:'resources/ic_credit_card_black_24px.svg', name:'Card Payment'},
//			  {url:'social:people',name:'People'}]; 
//		$scope.customerDetails = function(ev) {
//				$state.transitionTo('home.customerInfo');
//		    };
//		$scope.submit = function(myform){
//			myform.$submitted = true;
//			if(myform.$valid){
//				myform.$submitted = true;	
//				$scope.$emit('updateProgressCircular',[]);
//				beeKeeperService.validateAddress(createPostBody()).then(function successCallback(response) {
//                    $scope.validatedResponse = response.data;
//                    $scope.message = $scope.validatedResponse.message;
//                    if ($scope.message == "the address is validated") {
//                    	$mdDialog.show(
//                                $mdDialog.alert()
//                                  .title($scope.message)                                
//                                  .ok('OK')
//                             );                    
//                    	$scope.validateAddress = true;
//                        $scope.enableContinue = false;
//                    }
//                                      
//                                       
//                    $scope.$emit('updateProgressCircular',[]);
//                }, function errorCallback(error) {
//                    $scope.error = error;
//                    $scope.$emit('updateProgressCircular',[]);
//                });
//				
//				 
//				$scope.myFunc = function(){
//		        	$scope.validateAddress = false;
//		        	$scope.enableContinue = true;
//		        	submit();		        	
//		        }
//				
//			}
//		};
//		
//		
//
//		
//		function createPostBody(){
//            return {
//                    "First_Name": $scope.firstName,
//                    "Last_Name": $scope.lastName,
//                    "Email": $scope.email,
//                    "Phone_Number": $scope.phoneNumber,
//                    "Address": $scope.address,
//                    "City": $scope.city,
//                    "State": $scope.state,
//                    "Zip": $scope.zip
//
//                };
//		}
//		$scope.states = ['MAH','UP','MP'];
//		
//		$scope.iconClick = function(target){
//			if(target == 'People'){
//				alert('Whoa!');
//			}
//			console.log(target);
//		}; 
//		
//
//        var originatorEv;
//        $scope.openMenu = function($mdOpenMenu, ev) {
//        originatorEv = ev;
//           $mdOpenMenu(ev);
//        };
//        
//        $scope.menuItemClick = function(index) {
//           $mdDialog.show(
//              $mdDialog.alert()
////                .title('table of contents')
//                .textContent('Menu Item clicked, index: ' + index)
//                .ok('OK')
//                .targetEvent(originatorEv)
//           );
//           originatorEv = null;
//        };
//	}
//	
//
//	return _controller;
//});
