$('#theme-toggle').on('click', function () {
  const $html = $('html');
  const isLight = $html.attr('data-theme') === 'light';
  $html.attr('data-theme', isLight ? 'dark' : 'light');
  $(this).text(isLight ? '☀️' : '🌙');
});
