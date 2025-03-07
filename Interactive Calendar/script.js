// JavaScript file
// Initialize global variables
let currentDate = new Date();
let selectedDate = null;

// DOM elements
const calendarTitle = document.getElementById("month-year");
const calendarBody = document.querySelector("#calendar tbody");
const prevButton = document.getElementById("prev-month");
const nextButton = document.getElementById("next-month");
const eventModal = document.getElementById("event-modal");
const closeModalButton = document.querySelector(".close-btn");
const eventTitleInput = document.getElementById("event-title");
const addEventButton = document.getElementById("add-event");

// Event listener to close the modal
closeModalButton.addEventListener("click", () => {
    eventModal.style.display = "none";
    eventTitleInput.value = '';
});

// Event listener for adding an event
addEventButton.addEventListener("click", () => {
    const eventTitle = eventTitleInput.value.trim();
    if (eventTitle && selectedDate) {
        localStorage.setItem(selectedDate.toISOString(), eventTitle);
        renderCalendar();
        eventModal.style.display = "none";
    }
});

// Event listener for navigating to previous/next month
prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Render the calendar based on the current date
function renderCalendar() {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const numDaysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Set the calendar title (Month and Year)
    calendarTitle.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${currentYear}`;

    // Clear previous calendar content
    calendarBody.innerHTML = '';

    // Generate calendar rows
    let date = 1;
    for (let i = 0; i < 6; i++) {  // Maximum 6 rows for the calendar
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDayOfWeek || date > numDaysInMonth) {
                row.appendChild(cell);  // Empty cell
            } else {
                cell.textContent = date;
                const currentCellDate = new Date(currentYear, currentMonth, date);
                const savedEvent = localStorage.getItem(currentCellDate.toISOString());
                if (savedEvent) {
                    cell.classList.add("event");  // Mark the date with an event
                }
                // Add click listener to show the event modal
                cell.addEventListener("click", () => {
                    selectedDate = currentCellDate;
                    eventModal.style.display = "flex";
                    eventTitleInput.focus();
                });
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

// Initial render
renderCalendar();
