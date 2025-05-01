// JavaScript file
document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("event-form");
    const timeline = document.getElementById("timeline");

    eventForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const eventTitle = document.getElementById("event-title").value;
        const eventDate = document.getElementById("event-date").value;

        if (eventTitle && eventDate) {
            const eventDiv = document.createElement("div");
            eventDiv.className = "timeline-event";
            eventDiv.innerHTML = `
                <h3>${eventTitle}</h3>
                <p>${new Date(eventDate).toDateString()}</p>
            `;

            timeline.appendChild(eventDiv);
            eventForm.reset();
        }
    });
});
