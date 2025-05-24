// Theme toggle logic
document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
});

// Waist-Hip ratio calculation
document.getElementById('ratioForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const waist = parseFloat(document.getElementById('waist').value);
  const hip = parseFloat(document.getElementById('hip').value);
  const resultEl = document.getElementById('result');

  if (!gender || !waist || !hip || hip === 0) {
    resultEl.textContent = "Please fill in all fields correctly.";
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

  resultEl.innerHTML = `Your Waist-Hip Ratio is <strong>${ratio}</strong>.<br>Health Risk: <strong>${category}</strong>`;
});
