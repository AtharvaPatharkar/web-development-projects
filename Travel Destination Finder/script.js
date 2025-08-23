document.getElementById("travel-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const budget = document.getElementById("budget").value;
    const activities = document.getElementById("activities").value;

    const results = document.getElementById("results");
    results.innerHTML = `<p>Finding the best destinations for a budget of ₹${budget} focused on ${activities} activities...</p>`;

    // Simulate API interaction
    setTimeout(() => {
        results.innerHTML = `<p>Recommended Destination: <strong>Goa</strong> for ${activities} within ₹${budget}!</p>`;
    }, 2000);
});
