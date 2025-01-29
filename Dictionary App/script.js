// JavaScript file
document.getElementById("searchButton").addEventListener("click", async function () {
    const word = document.getElementById("wordInput").value.trim();
    if (!word) {
        alert("Please enter a word to search!");
        return;
    }

    const apiKey = "your-api-key"; // Replace with your dictionary API key
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; // Example API

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Word not found");
        }
        const data = await response.json();

        document.getElementById("word").textContent = data[0].word;
        document.getElementById("definition").textContent = data[0].meanings[0].definitions[0].definition;
        document.getElementById("synonyms").textContent = data[0].meanings[0].synonyms.join(", ");
        document.getElementById("example").textContent = data[0].meanings[0].definitions[0].example || "No example available";

        document.getElementById("wordDetails").classList.remove("hidden");
    } catch (error) {
        alert("Error fetching word details. Please try again.");
        console.error(error);
    }
});
