  // Theme Toggle
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  themeToggle.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  });

  // Logout button functionality
  document.getElementById('logout-btn').addEventListener('click', () => {
    alert('You have been logged out.');
    window.location.href = 'login.html'; // or wherever your login page is
  });
