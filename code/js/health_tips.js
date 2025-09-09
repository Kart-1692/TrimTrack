$('#theme-toggle').on('click', function () {
  const $html = $('html');
  const isLight = $html.attr('data-theme') === 'light';
  const newTheme = isLight ? 'dark' : 'light';
  
  $html.attr('data-theme', newTheme);
  $(this).text(newTheme === 'dark' ? '☀️' : '🌙');
  
  localStorage.setItem('theme', newTheme);
});

$(document).ready(function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  $('html').attr('data-theme', savedTheme);
  $('#theme-toggle').text(savedTheme === 'dark' ? '☀️' : '🌙');
});
