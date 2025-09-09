$(document).ready(function () {
  const $html = $('html');
  const $toggleButton = $('#theme-toggle');

  const savedTheme = localStorage.getItem('theme') || 'light';
  $html.attr('data-theme', savedTheme);
  $toggleButton.text(savedTheme === 'dark' ? '☀️' : '🌙');

  $toggleButton.on('click', function () {
    const currentTheme = $html.attr('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    $html.attr('data-theme', newTheme);
    $toggleButton.text(newTheme === 'dark' ? '☀️' : '🌙');
    localStorage.setItem('theme', newTheme);
  });

  $('#calculate-btn').on('click', function () {
    const unit = $('input[name="unit"]:checked').val();
    const weight = parseFloat($('#weight').val());
    const height = parseFloat($('#height').val());
    const $resultBox = $('#result');

    if (!weight || !height || weight <= 0 || height <= 0) {
      $resultBox.text("Please enter valid positive numbers.");
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

    $resultBox.text(`Your BMI is ${bmi} (${category}).`);
  });
});
