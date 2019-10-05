const name = document.getElementById('name');
const password = document.getElementById('password');
const error = document.getElementById('error');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let msg = [];
    if (name.value === '' || name.value == null) {
        msg.push('Enter smt');
    }

    if (password.value.length < 6) {
        msg.push('passs');
    }

    if ( msg.length > 0) {
        e.preventDefault();
        error.innerText = msg.join(', ');
    }
})