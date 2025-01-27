// JavaScript file
// Fetch exchange rates and populate the rates section
async function fetchExchangeRates(baseCurrency) {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        displayExchangeRates(data.rates);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

// Display exchange rates dynamically
function displayExchangeRates(rates) {
    const rateList = document.getElementById('rate-list');
    rateList.innerHTML = ''; // Clear previous rates

    for (const [currency, rate] of Object.entries(rates)) {
        const rateCard = document.createElement('div');
        rateCard.className = 'rate-card';
        rateCard.innerHTML = `<strong>${currency}</strong><br>${rate}`;
        rateList.appendChild(rateCard);
    }
}

// Populate the dropdown with currency options
async function populateDropdown() {
    const dropdown = document.getElementById('base-currency');
    const currencies = ['INR','USD', 'EUR', 'GBP',  'JPY', 'AUD', 'CAD'];

    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        dropdown.appendChild(option);
    });

    // Set default selection
    dropdown.value = 'INR';
    fetchExchangeRates('INR');
}

// Event listener for dropdown changes
document.getElementById('base-currency').addEventListener('change', (event) => {
    fetchExchangeRates(event.target.value);
});

// Initial setup
populateDropdown();
