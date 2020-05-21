// immediately-invoked function expression
let mySecretObj = (function () {
	options = {
		var1: 'a',
	};

	function check(params) {
		console.log('params', params);
	}

	return {
		check: check,
	};
})();
