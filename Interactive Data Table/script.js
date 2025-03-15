// JavaScript file
// Sample data for the table
const data = [
    { name: 'Raj Joshi', age: 28, city: 'Pune' },
    { name: 'Ajay Sharma', age: 32, city: 'Akola' },
    { name: 'Om Patil', age: 45, city: 'Nashik' },
    { name: 'Amay kale', age: 22, city: 'Solpur' },
    { name: 'Vikas pande', age: 35, city: 'Nagpur' },
    { name: 'Virat Desmuk', age: 28, city: 'Tane' },
    { name: 'Rohit Ingle', age: 40, city: 'Amravati' },
    { name: 'Sail Jog', age: 31, city: 'kolhapur' },
    { name: 'Subham Dande ', age: 23, city: 'Mumbai' },
    { name: 'Anand Bavkar', age: 33, city: ' ' }
];

let currentPage = 1;
const rowsPerPage = 5;

// Function to display the table data
function displayTable(page = 1) {
    const tableBody = document.getElementById('tableBody');
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = page * rowsPerPage;

    // Clear current table data
    tableBody.innerHTML = '';

    // Add rows for current page
    const pageData = data.slice(startIndex, endIndex);
    pageData.forEach((row) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.name}</td><td>${row.age}</td><td>${row.city}</td>`;
        tableBody.appendChild(tr);
    });

    // Update pagination
    updatePagination(page);
}

// Function to update pagination
function updatePagination(page) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(data.length / rowsPerPage);
    pagination.innerHTML = '';

    // Create page buttons
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('page-btn');
        if (i === page) button.classList.add('active');
        button.addEventListener('click', () => displayTable(i));
        pagination.appendChild(button);
    }
}

// Function to sort the table
function sortTable(colIndex) {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
        const aValue = Object.values(a)[colIndex];
        const bValue = Object.values(b)[colIndex];
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
    data.length = 0;
    data.push(...sortedData);
    displayTable(currentPage);
}

// Function to filter the table data
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredData = data.filter(row =>
        row.name.toLowerCase().includes(query) ||
        row.city.toLowerCase().includes(query)
    );
    updateTableData(filteredData);
});

function updateTableData(filteredData) {
    data.length = 0;
    data.push(...filteredData);
    displayTable(currentPage);
}

// Initial display of the table
window.onload = function () {
    displayTable(currentPage);
};
