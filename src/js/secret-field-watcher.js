class SecretFieldWatcher {
	// setup a class variable to hold all of our configured parameters
	options = {};

	// parameters will be an object literal {} containing the key-value pairs we need
	// known parameters: name, value, backgroundColor, errorMessage
	// parameters = { name: 'some name', value: 'some value',
	//                backgroundColor: 'some color', errorMessage: 'uh oh'}
	constructor(parameters) {
		const parametersWithDefaults = Object.assign(
			{}, // initial state will be {}
			{
				name: '',
				value: '',
				backgroundColor: 'blue',
				foregroundColor: 'white',
				errorMessage: '',
			}, // after merging this object, will be combined version
			parameters
		);

		const name = parametersWithDefaults.name;
		if (parametersWithDefaults.errorMessage) {
			parametersWithDefaults.backgroundColor = 'red';
		}

		this.options = parametersWithDefaults;

		console.log('SecretFieldWatcher ready!', parametersWithDefaults, name);

		if (name) {
			// the old JS way:
			// const field = document.querySelector('input[name="' + name + '"]')
			// the cool ES6 way:
			const field = document.querySelector(`input[name="${name}"]`);
			if (field) {
				field.addEventListener('keyup', this.lookForFieldValue);
			}
		}
	}

	lookForFieldValue = (evt) => {
		console.log('looking!', this.options.name, this.options.value);
		const currentValue = evt.target.value;
		if (currentValue === this.options.value) {
			console.log('matched!!');
			// now react to the matched value

			// 1. set the background color of the form area (white part) to the selected background color
			// 2. if there's an errorMessage show that in the span.error-message for this field
			// 3. on the next change of the field, reset the background color and empty the error field
		} else {
			console.log('did not match: ', currentValue);
		}
	};
}
