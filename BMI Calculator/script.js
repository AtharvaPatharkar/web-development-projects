document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert height to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('bmi-result').textContent = 'Please enter valid values for weight and height.';
        document.getElementById('bmi-result').classList.add('show');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Ideal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-result').innerHTML = `
        Your BMI is <strong>${bmi}</strong>, which means you are <strong>${category}</strong>.
    `;
    document.getElementById('bmi-result').classList.add('show');
});
