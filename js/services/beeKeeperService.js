'use strict';

define(['environment'], function (environment) {

	return ['beeKeeperService', function($http){
			return {
				validateAddress: function(data){
					return $http.post(environment.beekeeperValidateAddressUrl, data);
				}
			}
	}]
})