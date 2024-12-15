function bmi() {
    const height = document.getElementById("h").value;
    const weight = document.getElementById("w").value;

    if (height === "" || weight === "") {
        document.getElementById("result").innerHTML = "Please enter valid height and weight!";
        return;
    }

    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let resultText;
    if (bmiValue < 18.5) {
        resultText = `Your BMI is ${bmiValue} (Underweight)`;
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        resultText = `Your BMI is ${bmiValue} (Normal weight)`;
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        resultText = `Your BMI is ${bmiValue} (Overweight)`;
    } else {
        resultText = `Your BMI is ${bmiValue} (Obesity)`;
    }

    document.getElementById("result").innerHTML = resultText;
}
