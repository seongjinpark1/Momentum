const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('.loginInput');
// localStorage.removeItem('username');
function onSubmit(e) {
    e.preventDefault();
    let username = loginInput.value;
    localStorage.setItem('username', username);
    loginForm.classList.add('hidden');
    okLogin(username);
}

function okLogin(username) {
    // h1 생성 글
    let helloName = document.querySelector('h1');
    helloName.innerText = `Hello ${username}`;
    helloName.classList.remove('hidden');
}

const saveUsername = localStorage.getItem('username');

if (saveUsername === null) {
    loginForm.addEventListener('submit', onSubmit);
    loginForm.classList.remove('hidden');
} else {
    okLogin(saveUsername);
}

// className , classList 비교
