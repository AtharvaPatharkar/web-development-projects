// JavaScript file
// Local Storage Keys
const CART_KEY = 'shoppingCart';

// DOM Elements
const cartTableBody = document.querySelector('#cart-table tbody');
const totalPriceEl = document.getElementById('total-price');

// Cart Data
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || {};

// Update Cart Display
function updateCart() {
    cartTableBody.innerHTML = '';
    let total = 0;

    Object.keys(cart).forEach(id => {
        const item = cart[id];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <input type="number" min="1" value="${item.quantity}" data-id="${id}" class="update-quantity">
            </td>
            <td>
                <button class="remove-item" data-id="${id}">Remove</button>
            </td>
        `;
        cartTableBody.appendChild(row);
        total += item.price * item.quantity;
    });

    totalPriceEl.textContent = total.toFixed(2);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productEl = e.target.closest('.product');
        const id = productEl.dataset.id;
        const name = productEl.querySelector('p:first-child').textContent;
        const price = parseFloat(productEl.querySelector('p:nth-child(2)').textContent.slice(1));

        if (cart[id]) {
            cart[id].quantity += 1;
        } else {
            cart[id] = { name, price, quantity: 1 };
        }

        updateCart();
    });
});

// Update Quantity or Remove Item
cartTableBody.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (e.target.classList.contains('remove-item')) {
        delete cart[id];
        updateCart();
    } else if (e.target.classList.contains('update-quantity')) {
        cart[id].quantity = parseInt(e.target.value, 10) || 1;
        updateCart();
    }
});

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
    if (Object.keys(cart).length > 0) {
        alert('Checkout Successful!');
        cart = {};
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});

// Initial Cart Load
updateCart();
