// JavaScript file
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");
    const tableBody = document.querySelector("#product-table tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("product-name").value;
        const quantity = document.getElementById("product-quantity").value;
        const price = document.getElementById("product-price").value;
        const reorderLevel = document.getElementById("reorder-level").value;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td>₹${parseFloat(price).toFixed(2)}</td>
            <td>${reorderLevel}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        row.querySelector(".delete-btn").addEventListener("click", () => {
            row.remove();
        });

        tableBody.appendChild(row);

        form.reset();
    });
});
