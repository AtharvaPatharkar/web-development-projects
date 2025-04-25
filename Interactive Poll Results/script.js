// JavaScript file
const pollData = {
    labels: ["Option 1", "Option 2", "Option 3"],
    votes: [0, 0, 0],
};

// Initialize Chart.js
const ctx = document.getElementById("pollChart").getContext("2d");
const pollChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: pollData.labels,
        datasets: [{
            label: "Votes",
            data: pollData.votes,
            backgroundColor: ["#ff4757", "#1e90ff", "#2ed573"],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Handle Form Submission
document.getElementById("poll-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        const optionIndex = pollData.labels.indexOf(selectedOption.value);
        pollData.votes[optionIndex] += 1;

        // Update Chart
        pollChart.data.datasets[0].data = pollData.votes;
        pollChart.update();

        alert("Thank you for voting!");
    } else {
        alert("Please select an option before submitting.");
    }
});
