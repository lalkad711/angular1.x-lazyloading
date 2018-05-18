define([], function () {

	var $provide;

	function setProvide(value) {
		$provide = value;
	}

	function register(service) {
		if (service) {
			if (!$provide) {
				throw new Error("$setProvide is not set!");
			}
			$provide.service(service[0], service[1]);
		} else {
			$provide.service = null;
		}

	}


	return {
		setProvide: setProvide,
		register: register
	}
})
