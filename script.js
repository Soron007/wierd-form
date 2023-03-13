const form = document.querySelector('.form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('submit-btn');
let button_value = document.getElementById("button-value");

let hover = 0;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameVal = username.value;
    const passwordVal = password.value;

    if (usernameVal === 'myusername' && passwordVal === 'mypassword') {
        button.style.backgroundColor = '#4CAF50';
        button.value = 'Success!';
        button_value.innerText = button.value;
        button_value.style.color = "green";
        button_value.style.fontWeight = "bold";



    } else if (!usernameVal && !passwordVal) {
        button.disabled = true;

    } else {
        button.style.backgroundColor = '#f44336';
        button.value = 'Incorrect Credentials!';
        button_value.innerText = button.value;
        button_value.style.color = "red";
        button_value.style.fontWeight = "bold";
    }
});



button.addEventListener('mouseover', () => {

    if (!username.value || !password.value) {
        hover++;

        button.style.setProperty(
            '--x',
            `${hover % 2 === 1 ? '10rem' : '-10rem'}`
        );
    }



});

username.addEventListener('input', handleInput);
password.addEventListener('input', handleInput);

function handleInput() {
    if (username.value && password.value) {
        button.style.setProperty('--x', '0');
        button.disabled = false;
    } else {
        button.style.setProperty('--x', '');


    }
}
