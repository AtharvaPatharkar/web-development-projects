// JavaScript file
const expenses = [];

document.getElementById("add-expense").addEventListener("click", () => {
    const name = document.getElementById("person-name").value.trim();
    const amount = parseFloat(document.getElementById("expense-amount").value.trim());

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid name and expense amount.");
        return;
    }

    expenses.push({ name, amount });
    displayExpenses();
    document.getElementById("person-name").value = "";
    document.getElementById("expense-amount").value = "";
});

document.getElementById("calculate-split").addEventListener("click", () => {
    if (expenses.length === 0) {
        alert("No expenses added.");
        return;
    }

    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const splitAmount = totalExpense / expenses.length;

    document.getElementById("total-expense").innerText = `Total Expense: ₹${totalExpense.toFixed(2)}`;
    document.getElementById("split-amount").innerText = `Each Person Pays: ₹${splitAmount.toFixed(2)}`;
    document.getElementById("result-section").classList.remove("hidden");
});

function displayExpenses() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach(expense => {
        const listItem = document.createElement("li");
        listItem.innerText = `${expense.name} - ₹${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}
