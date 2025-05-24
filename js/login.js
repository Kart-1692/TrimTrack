const $html = $('html');
const $themeSwitch = $('#theme-switch');

function setTheme(theme) {
  $html.attr('data-theme', theme);
  localStorage.setItem('theme', theme);
  $themeSwitch.text(theme === 'dark' ? '☀️' : '🌙');
}

$themeSwitch.on('click', () => {
  const currentTheme = $html.attr('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

$(document).ready(function () {
  // Initialize theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Tab switching
  $('#login-tab').on('click', function () {
    $('#login-tab').addClass('active');
    $('#register-tab').removeClass('active');
    $('#login-form').removeClass('hidden').addClass('active');
    $('#register-form').addClass('hidden').removeClass('active');
    $('#login-message, #register-message').text('').removeClass('error success visible');
  });

  $('#register-tab').on('click', function () {
    $('#register-tab').addClass('active');
    $('#login-tab').removeClass('active');
    $('#register-form').removeClass('hidden').addClass('active');
    $('#login-form').addClass('hidden').removeClass('active');
    $('#login-message, #register-message').text('').removeClass('error success visible');
  });

  // Login form submission
  $('#login-form').submit(function (e) {
    e.preventDefault();

    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    const $loginMessage = $('#login-message');

    $loginMessage.removeClass('error success visible').text('');

    if (!username || !password) {
      $loginMessage.text('Please fill in all fields.').addClass('error visible');
      return;
    }

    if (username === 'user' && password === 'pass') {
      $loginMessage.text('Login successful! Redirecting...').addClass('success visible');
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1500);
    } else {
      $loginMessage.text('Invalid username or password.').addClass('error visible');
    }
  });

  // Register form submission
  $('#register-form').submit(function (e) {
    e.preventDefault();

    const username = $('#reg-username').val().trim();
    const password = $('#reg-password').val().trim();
    const confirmPassword = $('#reg-confirm-password').val().trim();
    const $registerMessage = $('#register-message');

    $registerMessage.removeClass('error success visible').text('');

    if (!username || !password || !confirmPassword) {
      $registerMessage.text('Please fill in all fields.').addClass('error visible');
      return;
    }

    if (password !== confirmPassword) {
      $registerMessage.text('Passwords do not match.').addClass('error visible');
      return;
    }

    $registerMessage.text('Registration successful! Please login now.').addClass('success visible');

    // Clear form inputs
    $('#reg-username, #reg-password, #reg-confirm-password').val('');

    // Switch to login tab after short delay
    setTimeout(() => {
      $('#login-tab').click();
    }, 1500);
  });
});
