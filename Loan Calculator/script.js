// Calculate monthly loan payment
function calculateLoanPayment(amount, interest, years) {
    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    // Monthly payment formula
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        return monthly.toFixed(2);
    } else {
        return "Error!";
    }
}

// Event listener for form submission
document.getElementById('loan-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const monthlyPayment = calculateLoanPayment(amount, interest, years);

    document.getElementById('monthly-payment').innerText = `₹${monthlyPayment}`;
});
