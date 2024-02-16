function checkEmailValidity(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkContactForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var contactFormError = document.getElementById('contactFormError');
    var isValid = true;

    contactFormError.innerHTML = '';

    if (name === '') {
        displayErrorMessage('Name is required.');
        isValid = false;
    }

    if (email === '') {
        displayErrorMessage('Email is required.');
        isValid = false;
    } else if (!checkEmailValidity(email)) {
        displayErrorMessage('Invalid email format.');
        isValid = false;
    }

    if (message === '') {
        displayErrorMessage('Message must not be empty.');
        isValid = false;
    }

     var containsNumbersOrSpecial = /[0-9~`!@#$%^&*()_+-=\[\]{}|\\;:'",.<>/?]/.test(message);
    if (containsNumbersOrSpecial) {
        displayErrorMessage('Message should not contain numbers or special characters.');
        isValid = false;
    }

    if (isValid) {
        // Submit the form or perform other actions here
        console.log('Form submitted successfully!');
    }
}

function displayErrorMessage(message) {
    var contactFormError = document.getElementById('contactFormError');
    var errorMessageNode = document.createElement('p');
    errorMessageNode.textContent = message;
    contactFormError.appendChild(errorMessageNode);
}
