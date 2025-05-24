// Theme Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// BMI Calculation
document.getElementById('calculate-btn').addEventListener('click', () => {
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultBox = document.getElementById('result');

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultBox.textContent = "Please enter valid positive numbers.";
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

  resultBox.textContent = `Your BMI is ${bmi} (${category}).`;
});
