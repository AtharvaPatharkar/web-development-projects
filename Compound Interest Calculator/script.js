function calculateCompoundInterest() {
    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const compounds = parseFloat(document.getElementById('compounds').value);

    // Validate input
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compounds) || principal <= 0 || rate <= 0 || time <= 0 || compounds <= 0) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Please enter valid values for all fields.</p>';
        return;
    }

    // Calculate compound interest
    const amount = principal * Math.pow((1 + rate / compounds), compounds * time);
    const interest = amount - principal;

    // Format numbers as Indian Rupees
    const principalFormatted = principal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    const amountFormatted = amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    const interestFormatted = interest.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Initial Investment: ${principalFormatted}</p>
        <p>Total Amount: ${amountFormatted}</p>
        <p>Compound Interest Earned: ${interestFormatted}</p>
    `;
}
