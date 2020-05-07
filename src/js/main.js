new SecretFieldWatcher();
new SecretFieldWatcher({ name: 'full_name', value: 'Stella' });
new SecretFieldWatcher({
	name: 'full_name',
	value: 'Porter',
	backgroundColor: 'brown',
});
new SecretFieldWatcher({
	name: 'full_name',
	value: 'Taco',
	foregroundColor: 'black',
	backgroundColor: 'pink',
});
new SecretFieldWatcher({
	name: 'email',
	value: 'test@test.com',
	backgroundColor: 'green',
	errorMessage: 'Invalid Email!',
});
