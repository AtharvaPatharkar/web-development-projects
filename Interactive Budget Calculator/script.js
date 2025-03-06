// JavaScript file
// Interactive Budget Calculator

let totalIncome = 0;
let totalExpenses = 0;
const expenseData = [];
const expenseChartCanvas = document.getElementById("expense-chart");

// Update Summary
function updateSummary() {
    document.getElementById("total-income").textContent = totalIncome;
    document.getElementById("total-expenses").textContent = totalExpenses;
    document.getElementById("remaining-balance").textContent = totalIncome - totalExpenses;
    updateChart();
}

// Add Expense
document.getElementById("add-expense").addEventListener("click", () => {
    const incomeInput = document.getElementById("income").value;
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

    if (incomeInput && !totalIncome) {
        totalIncome = parseFloat(incomeInput);
    }

    if (expenseName && expenseAmount && expenseAmount > 0) {
        totalExpenses += expenseAmount;
        expenseData.push({ name: expenseName, amount: expenseAmount });
        updateSummary();
    }
});

// Update Chart
function updateChart() {
    const labels = expenseData.map((item) => item.name);
    const data = expenseData.map((item) => item.amount);

    const chartConfig = {
        type: "pie",
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#66CC66",
                        "#FF9966",
                        "#CC33FF",
                    ],
                },
            ],
        },
    };

    if (expenseChartCanvas.chart) {
        expenseChartCanvas.chart.destroy();
    }

    expenseChartCanvas.chart = new Chart(expenseChartCanvas, chartConfig);
}
