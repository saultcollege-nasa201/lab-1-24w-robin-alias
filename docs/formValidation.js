document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    resetErrors();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name cannot be empty';
        document.getElementById('name').classList.add('error');
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name should only contain alphabets and spaces';
        document.getElementById('name').classList.add('error');
    }
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').innerText = 'Email cannot be empty';
        document.getElementById('email').classList.add('error');
    }
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').innerText = 'Message cannot be empty';
        document.getElementById('message').classList.add('error');
    }
    if (isValid) {
        this.submit();
    }
});
function resetErrors() {
    var errorMessages = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerText = '';
    }

    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error');
    }

    var textarea = document.getElementsByTagName('textarea')[0];
    textarea.classList.remove('error');
    document.getElementById('messageError').innerText = '';
}
