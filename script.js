// Example of submitting form data to Google Sheets
// const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

function validateLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const errorMessage = document.getElementById('login-error');

  errorMessage.textContent = '';

  if (!email.includes('@')) {
      errorMessage.textContent = 'Please enter a valid email.';
      return false;
  }

  if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters.';
      return false;
  }

  return true; // Valid login
}

function validateRegister() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;
  const errorMessage = document.getElementById('register-error');

  errorMessage.textContent = '';

  if (username.length < 3) {
      errorMessage.textContent = 'Username must be at least 3 characters.';
      return false;
  }

  if (!email.includes('@')) {
      errorMessage.textContent = 'Please enter a valid email.';
      return false;
  }

  if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters.';
      return false;
  }

  if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      return false;
  }

  return true; // Valid registration
}

