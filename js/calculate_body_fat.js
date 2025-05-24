// Theme toggle logic using jQuery
$('#theme-toggle').on('click', function () {
  const $html = $('html');
  const isLight = $html.attr('data-theme') === 'light';
  $html.attr('data-theme', isLight ? 'dark' : 'light');
  $(this).text(isLight ? '☀️' : '🌙');
});

$('#gender').on('change', function () {
  const gender = $(this).val();
  $('.female-only').css('display', gender === 'female' ? 'block' : 'none');
});

// Body fat calculation using jQuery
$('#bodyFatForm').on('submit', function (e) {
  e.preventDefault();

  const gender = $('#gender').val();
  const height = parseFloat($('#height').val());
  const neck = parseFloat($('#neck').val());
  const waist = parseFloat($('#waist').val());
  const hip = parseFloat($('#hip').val()) || 0;

  let bodyFat;

  if (gender === 'male') {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }

  bodyFat = bodyFat.toFixed(2);

  $('#result').html(`Estimated Body Fat: <strong>${bodyFat}%</strong>`);
});
