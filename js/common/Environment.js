'use strict';
define([],
function()
{
	var LOCAL_DEVELOPMENT_ENVRONMENT = {};
	
	var DEVELOPMENT_ENVRONMENT = {};
	
	var STAGING_ENVRONMENT = {
			'beekeeperValidateAddressUrl':'http://chp5.dev.shadow50.cwsdcsc.com:6050/api/validateAddress/validate'
	};
	
	var PRODUCTION_ENVRONMENT = {};
	
	var CURRENT_ENVIRONMENT = STAGING_ENVRONMENT; // Set this to current environment
	
	return CURRENT_ENVIRONMENT;
});
