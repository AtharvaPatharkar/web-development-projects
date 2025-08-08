// JavaScript file
document.getElementById("poll-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the selected vote option
    const selectedOption = document.querySelector('input[name="poll-option"]:checked');
    
    if (selectedOption) {
        const vote = selectedOption.value;
        
        // Update the vote counts (you would send this data to the backend in a real app)
        updateVoteCount(vote);
    } else {
        alert("Please select an option to vote!");
    }
});

function updateVoteCount(vote) {
    let jsVotes = parseInt(document.getElementById("js-votes").textContent);
    let pythonVotes = parseInt(document.getElementById("python-votes").textContent);
    let javaVotes = parseInt(document.getElementById("java-votes").textContent);
    let cppVotes = parseInt(document.getElementById("cpp-votes").textContent);
    
    // Increment the vote count based on the selected option
    switch (vote) {
        case "JavaScript":
            jsVotes++;
            document.getElementById("js-votes").textContent = jsVotes;
            break;
        case "Python":
            pythonVotes++;
            document.getElementById("python-votes").textContent = pythonVotes;
            break;
        case "Java":
            javaVotes++;
            document.getElementById("java-votes").textContent = javaVotes;
            break;
        case "C++":
            cppVotes++;
            document.getElementById("cpp-votes").textContent = cppVotes;
            break;
    }

    // Optionally, send the vote to the backend for storage here
}
