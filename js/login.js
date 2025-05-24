const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeSwitch.textContent = theme === 'dark' ? '☀️' : '🌙';
}

themeSwitch.addEventListener('click', () => {
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});

$(document).ready(function () {
  // Tab switching
  $('#login-tab').click(function () {
    $('#login-tab').addClass('active');
    $('#register-tab').removeClass('active');
    $('#login-form').removeClass('hidden').addClass('active');
    $('#register-form').addClass('hidden').removeClass('active');
    $('#login-message, #register-message').text('').removeClass('error success');
  });

  $('#register-tab').click(function () {
    $('#register-tab').addClass('active');
    $('#login-tab').removeClass('active');
    $('#register-form').removeClass('hidden').addClass('active');
    $('#login-form').addClass('hidden').removeClass('active');
    $('#login-message, #register-message').text('').removeClass('error success');
  });

  // Login form submission
 // Login form submission
$('#login-form').submit(function (e) {
  e.preventDefault();

  const username = $('#username').val().trim();
  const password = $('#password').val().trim();

  $('#login-message').removeClass('error success visible').text('');

  if (!username || !password) {
    $('#login-message')
      .text('Please fill in all fields.')
      .addClass('error visible');
    return;
  }

  if (username === 'user' && password === 'pass') {
    $('#login-message')
      .text('Login successful! Redirecting...')
      .addClass('success visible');

    setTimeout(() => {
      window.location.href = 'home.html';
    }, 1500);
  } else {
    $('#login-message')
      .text('Invalid username or password.')
      .addClass('error visible');
  }
});

// Register form submission
$('#register-form').submit(function (e) {
  e.preventDefault();

  const username = $('#reg-username').val().trim();
  const password = $('#reg-password').val().trim();
  const confirmPassword = $('#reg-confirm-password').val().trim();

  $('#register-message').removeClass('error success visible').text('');

  if (!username || !password || !confirmPassword) {
    $('#register-message')
      .text('Please fill in all fields.')
      .addClass('error visible');
    return;
  }

  if (password !== confirmPassword) {
    $('#register-message')
      .text('Passwords do not match.')
      .addClass('error visible');
    return;
  }

  $('#register-message')
    .text('Registration successful! Please login now.')
    .addClass('success visible');

  // Clear form inputs
  $('#reg-username, #reg-password, #reg-confirm-password').val('');

  // Switch to login tab after short delay
  setTimeout(() => {
    $('#login-tab').click();
  }, 1500);
});

});
