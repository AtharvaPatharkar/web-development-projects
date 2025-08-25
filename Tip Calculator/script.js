document.getElementById('calculate').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers for bill amount and tip percentage.');
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Format the results in INR (Indian Rupees)
    const formattedTipAmount = tipAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    const formattedTotalAmount = totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    // Update the result
    document.getElementById('tipAmount').textContent = formattedTipAmount;
    document.getElementById('totalAmount').textContent = formattedTotalAmount;
});
