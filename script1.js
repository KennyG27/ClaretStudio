const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('message');

// Base de datos falsa en memoria
const users = [];

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUser = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  users.push(newUser);
  messageElement.textContent = 'Registro Exitoso Bienvenido Claretiano!';
  setTimeout(() => {
    messageElement.textContent = '';
    window.location.href = 'index2.html';
  }, 3000);
});
