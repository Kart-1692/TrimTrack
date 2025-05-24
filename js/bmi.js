// Theme toggle logic using jQuery with persistence
$('#theme-toggle').on('click', function () {
  const $html = $('html');
  const isLight = $html.attr('data-theme') === 'light';
  const newTheme = isLight ? 'dark' : 'light';
  $html.attr('data-theme', newTheme);
  $(this).text(newTheme === 'dark' ? '☀️' : '🌙');
  localStorage.setItem('theme', newTheme);
});

$(document).ready(function () {
  // Set theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  $('html').attr('data-theme', savedTheme);
  $('#theme-toggle').text(savedTheme === 'dark' ? '☀️' : '🌙');

  // Show/hide hip input for females on load
  const gender = $('#gender').val();
  $('.female-only').css('display', gender === 'female' ? 'block' : 'none');
});

// Show/hide hip input when gender changes
$('#gender').on('change', function () {
  const gender = $(this).val();
  $('.female-only').css('display', gender === 'female' ? 'block' : 'none');
});

// Body fat calculation
$('#bodyFatForm').on('submit', function (e) {
  e.preventDefault();

  const gender = $('#gender').val();
  const height = parseFloat($('#height').val());
  const neck = parseFloat($('#neck').val());
  const waist = parseFloat($('#waist').val());
  const hip = parseFloat($('#hip').val()) || 0;

  if (!gender || !height || !neck || !waist || (gender === 'female' && !hip)) {
    $('#result').text("Please fill all required fields correctly.");
    return;
  }

  let bodyFat;
  if (gender === 'male') {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }

  bodyFat = bodyFat.toFixed(2);
  $('#result').html(`Estimated Body Fat: <strong>${bodyFat}%</strong>`);
});

// BMI calculation
$('#bmiForm').on('submit', function (e) {
  e.preventDefault();

  const unit = $('input[name="unit"]:checked').val();
  const weight = parseFloat($('#weight').val());
  const height = parseFloat($('#height-bmi').val());
  const resultBox = $('#bmiResult');

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultBox.text("Please enter valid positive numbers.");
    return;
  }

  let bmi;
  if (unit === 'metric') {
    bmi = weight / ((height / 100) ** 2);
  } else {
    bmi = (703 * weight) / (height ** 2);
  }

  bmi = bmi.toFixed(1);

  let category;
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Fit";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  resultBox.text(`Your BMI is ${bmi} (${category}).`);
});

// Waist-Hip ratio calculation
$('#ratioForm').on('submit', function (e) {
  e.preventDefault();

  const gender = $('#gender-ratio').val();
  const waist = parseFloat($('#waist-ratio').val());
  const hip = parseFloat($('#hip-ratio').val());
  const resultEl = $('#ratioResult');

  if (!gender || !waist || !hip || hip === 0) {
    resultEl.text("Please fill in all fields correctly.");
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

  resultEl.html(`Your Waist-Hip Ratio is <strong>${ratio}</strong>.<br>Health Risk: <strong>${category}</strong>`);
});
