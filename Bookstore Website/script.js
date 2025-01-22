// JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { id: 1, title: 'The White Tiger', category: 'fiction', price: 399 },
        { id: 2, title: 'India After Gandhi', category: 'non-fiction', price: 799 },
        { id: 3, title: 'The Monk Who Sold His Ferrari', category: 'self-help', price: 299 },
        { id: 4, title: 'Wings of Fire', category: 'biography', price: 350 },
        { id: 5, title: 'Train to Pakistan', category: 'fiction', price: 249 },
        { id: 6, title: 'The Discovery of India', category: 'non-fiction', price: 650 },
        { id: 7, title: 'You Can Win', category: 'self-help', price: 350 },
        { id: 8, title: 'My Experiments with Truth', category: 'biography', price: 400 },
    ];

    const booksSection = document.getElementById('books-section');
    const cartItems = document.getElementById('cart-items');
    const categoryFilter = document.getElementById('category-filter');
    const checkoutBtn = document.getElementById('checkout-btn');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const renderBooks = (category = 'all') => {
        booksSection.innerHTML = '';
        const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);
        filteredBooks.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book-item');
            bookDiv.innerHTML = `
                <span>${book.title} - ₹${book.price}</span>
                <button data-id="${book.id}">Add to Cart</button>
            `;
            booksSection.appendChild(bookDiv);
        });
    };

    const renderCart = () => {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('book-item');
            cartItem.innerHTML = `
                <span>${item.title} - ₹${item.price}</span>
                <button data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    booksSection.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const bookId = +e.target.dataset.id;
            const book = books.find(b => b.id === bookId);
            if (book) {
                cart.push(book);
                renderCart();
            }
        }
    });

    cartItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const itemIndex = +e.target.dataset.index;
            cart.splice(itemIndex, 1);
            renderCart();
        }
    });

    categoryFilter.addEventListener('change', (e) => {
        renderBooks(e.target.value);
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart.length = 0;
        renderCart();
    });

    renderBooks();
    renderCart();
});
