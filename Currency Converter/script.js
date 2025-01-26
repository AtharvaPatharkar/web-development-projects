// JavaScript file
const apiURL = "https://api.exchangerate-api.com/v4/latest/USD"; // Example API

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertButton = document.getElementById("convert-button");
const resultDisplay = document.getElementById("converted-value");

let exchangeRates = {};

// Fetch exchange rates and populate the dropdowns
fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        exchangeRates = data.rates;
        populateCurrencyDropdowns(exchangeRates);
    })
    .catch((error) => {
        console.error("Error fetching exchange rates:", error);
        alert("Failed to load exchange rates. Please try again later.");
    });

function populateCurrencyDropdowns(rates) {
    const currencyOptions = Object.keys(rates)
        .map((currency) => `<option value="${currency}">${currency}</option>`)
        .join("");
    fromCurrency.innerHTML = currencyOptions;
    toCurrency.innerHTML = currencyOptions;

    // Set default selections
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
}

convertButton.addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
    resultDisplay.textContent = `${convertedAmount.toFixed(2)} ${to}`;
});
