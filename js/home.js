const $html = $('html');
const $themeToggle = $('#theme-toggle');

function setTheme(theme) {
  $html.attr('data-theme', theme);
  localStorage.setItem('theme', theme);
  $themeToggle.text(theme === 'dark' ? '☀️' : '🌙');
}

$themeToggle.on('click', function () {
  const currentTheme = $html.attr('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

$(document).ready(function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  $('#logout-btn').on('click', function () {
    alert('You have been logged out.');
    window.location.href = 'login.html'; 
  });
});
