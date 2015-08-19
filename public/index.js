/* I put everything in function just in case there are variables with the same name elsewhere */

var braveUXApp = function(){

//Show Full Menu
	var hamburger = document.getElementById('hamburger')
	var fullMenu = document.querySelector('.full-menu')
	var menu = document.querySelector('.right')

	hamburger.addEventListener('click', function() {
		fullMenu.classList.toggle('show')
		fullMenu.classList.toggle('hide')
		if (menu.classList.contains('show')) {
			menu.classList.toggle('close')
			menu.classList.toggle('show')
		}
		menu.classList.toggle('show')
		
		
	})

// Show Error
	var button = document.getElementById('button')
	var inputUsername = document.getElementsByName('username')
	var inputPassword = document.getElementsByName('password')

	var errorMessage = document.querySelector('.error')
	var errorUsername = document.querySelector('.username')
	var errorPassword = document.querySelector('.password')
	
	button.addEventListener('click', function() {
		var passwordValue = inputPassword[0].value
		var parameters = /^([A-Z0-9a-z]){6,}$/

		if(inputUsername[0].value === '' || passwordValue === '' || parameters.test(passwordValue) === false) {

			errorMessage.classList.toggle('show')
			errorMessage.classList.toggle('hide')
			errorUsername.classList.toggle('red')
			errorPassword.classList.toggle('red')
		}
	})
// Show Password
	var eye = document.getElementById('eye')
	var inputType = document.querySelector('#password-input')

	eye.addEventListener('click', function() {	
		inputType.type = 'text'
	})
}

braveUXApp()