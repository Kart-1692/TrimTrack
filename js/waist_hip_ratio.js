const $html = $('html');
const $themeToggle = $('#theme-toggle');

function setTheme(theme) {
  $html.attr('data-theme', theme);
  localStorage.setItem('theme', theme);
  $themeToggle.text(theme === 'dark' ? '☀️' : '🌙');
}

$themeToggle.on('click', function () {
  let currentTheme = $html.attr('data-theme');

  if (!currentTheme) currentTheme = 'light';

  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

$(document).ready(function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});


$('#ratioForm').on('submit', function (e) {
  e.preventDefault();

  const gender = $('#gender').val();
  const waist = parseFloat($('#waist').val());
  const hip = parseFloat($('#hip').val());
  const $resultEl = $('#result');

  if (!gender || !waist || !hip || hip === 0) {
    $resultEl.text("Please fill in all fields correctly.");
    return;
  }

  const ratio = (waist / hip).toFixed(2);
  let category = "";

  if (gender === 'male') {
    if (ratio < 0.90) category = "Low Risk";
    else if (ratio < 1.0) category = "Moderate Risk";
    else category = "High Risk";
  } else {
    if (ratio < 0.80) category = "Low Risk";
    else if (ratio < 0.85) category = "Moderate Risk";
    else category = "High Risk";
  }

  $resultEl.html(`Your Waist-Hip Ratio is <strong>${ratio}</strong>.<br>Health Risk: <strong>${category}</strong>`);
});
