// Theme toggle logic
document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
});

// Show/hide hip input for females
document.getElementById('gender').addEventListener('change', (e) => {
  const hipGroup = document.querySelector('.female-only');
  hipGroup.style.display = e.target.value === 'female' ? 'block' : 'none';
});

// Body fat calculation
document.getElementById('bodyFatForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const neck = parseFloat(document.getElementById('neck').value);
  const waist = parseFloat(document.getElementById('waist').value);
  const hip = parseFloat(document.getElementById('hip').value || 0);

  let bodyFat;

  if (gender === 'male') {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }

  bodyFat = bodyFat.toFixed(2);

  const result = document.getElementById('result');
  result.innerHTML = `Estimated Body Fat: <strong>${bodyFat}%</strong>`;
});
