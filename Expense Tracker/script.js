// Get elements from the DOM
const addBtn = document.getElementById('add-btn');
const type = document.getElementById('type');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const totalIncome = document.getElementById('total-income');
const totalExpense = document.getElementById('total-expense');
const netBalance = document.getElementById('net-balance');
const historyList = document.getElementById('history-list');

// Load previous transactions from localStorage, if available
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Function to update the UI
function updateUI() {
    let income = 0, expense = 0;

    // Clear the previous history
    historyList.innerHTML = '';

    // Formatter to display amounts in INR (Indian Rupees)
    const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

    // Loop through all transactions and display them
    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${transaction.type.toUpperCase()}: ${transaction.description} - ${formatter.format(transaction.amount)}
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        historyList.appendChild(li);

        // Calculate total income and total expense
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else if (transaction.type === 'expense') {
            expense += transaction.amount;
        }
    });

    // Update the summary with formatted values
    totalIncome.textContent = formatter.format(income);
    totalExpense.textContent = formatter.format(expense);
    netBalance.textContent = formatter.format(income - expense);

    // Save the transactions in localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Function to add a new transaction
addBtn.addEventListener('click', () => {
    // Get input values
    const transactionType = type.value;
    const transactionDescription = description.value.trim();
    const transactionAmount = parseFloat(amount.value);

    // Validate inputs: Description should not be empty and amount should be a valid number and greater than zero
    if (!transactionDescription) {
        alert('Please enter a description.');
        return;
    }

    if (isNaN(transactionAmount) || transactionAmount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Create a new transaction object
    const transaction = {
        type: transactionType,
        description: transactionDescription,
        amount: transactionAmount
    };

    // Add the transaction to the list
    transactions.push(transaction);

    // Update the UI
    updateUI();

    // Clear the input fields
    description.value = '';
    amount.value = '';
});

// Function to delete a transaction
function deleteTransaction(index) {
    // Remove the transaction from the transactions array
    transactions.splice(index, 1);

    // Update the UI after deletion
    updateUI();
}

// Event listener for delete buttons
historyList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        deleteTransaction(index);
    }
});

// Initial load: Update the UI when the page is loaded
updateUI();
