// JavaScript file
const apiKey = "your-api-key"; // Replace with your stock API key
const apiUrl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=";

document.getElementById("addStockButton").addEventListener("click", async function () {
    const stockSymbol = document.getElementById("stockSymbol").value.trim().toUpperCase();
    if (!stockSymbol) {
        alert("Please enter a stock symbol.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${stockSymbol}&apikey=${apiKey}`);
        if (!response.ok) {
            throw new Error("Error fetching stock data.");
        }

        const data = await response.json();
        if (!data["Global Quote"]) {
            alert("Stock not found. Please check the symbol and try again.");
            return;
        }

        const stockDetails = data["Global Quote"];
        addStockToPortfolio(stockSymbol, stockDetails);
    } catch (error) {
        alert("Unable to fetch stock data. Please try again later.");
        console.error(error);
    }
});

function addStockToPortfolio(symbol, details) {
    const stockList = document.getElementById("stockList");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${symbol}</span>
        <span>Price: ₹${parseFloat(details["05. price"]).toFixed(2)}</span>
        <span>Change: ${details["10. change percent"]}</span>
    `;

    stockList.appendChild(listItem);
}
