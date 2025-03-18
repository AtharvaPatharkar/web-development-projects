// JavaScript file
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Prices for each menu item
    const prices = {
        burger: 199,
        pizza: 299,
        fries: 199,
        soda: 99,
    };

    // Get quantities of each item
    const burgerQty = parseInt(document.getElementById("burger").value) || 0;
    const pizzaQty = parseInt(document.getElementById("pizza").value) || 0;
    const friesQty = parseInt(document.getElementById("fries").value) || 0;
    const sodaQty = parseInt(document.getElementById("soda").value) || 0;

    // Calculate total items and cost
    const totalItems = burgerQty + pizzaQty + friesQty + sodaQty;
    const totalCost =
        burgerQty * prices.burger +
        pizzaQty * prices.pizza +
        friesQty * prices.fries +
        sodaQty * prices.soda;

    // Update order summary
    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-cost").textContent = `₹${totalCost.toFixed(2)}`;
});
