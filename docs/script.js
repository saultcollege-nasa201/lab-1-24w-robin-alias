document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var errorMessages = document.getElementById('errorMessages');
    var isValid = true;

    errorMessages.innerHTML = '';

    if (name === '') {
        displayErrorMessage('Name is required.');
        isValid = false;
    }

    if (message === '') {
        displayErrorMessage('Message must not be empty.');
        isValid = false;
    }

    if (isValid) {
        event.target.submit();
    }
});

function displayErrorMessage(message) {
    var errorMessages = document.getElementById('errorMessages');
    var errorMessageNode = document.createElement('p');
    errorMessageNode.textContent = message;
    errorMessages.appendChild(errorMessageNode);
}
