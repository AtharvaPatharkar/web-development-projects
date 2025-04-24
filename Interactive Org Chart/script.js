// JavaScript file
// Select all toggle buttons
const toggleButtons = document.querySelectorAll(".toggle-btn");

// Add event listeners to toggle sections on button click
toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
        const details = this.parentElement.querySelector(".details");

        // Toggle the display of the details
        if (details.style.display === "block") {
            details.style.display = "none";
            this.textContent = "+";
        } else {
            details.style.display = "block";
            this.textContent = "-";
        }
    });
});
