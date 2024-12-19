// Get DOM elements
const title = document.querySelector("#title");
const textArea = document.querySelector("#note-text");
const timeInput = document.querySelector("#time"); // Select the time input field
const button = document.querySelector(".note-btn");

// Add event listener for the schedule button
button.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    let notesObj;

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // Create a new note object with title, textArea (teacher's name), and time
    let myObj = {
        title: title.value,
        textArea: textArea.value,
        time: timeInput.value // Add the time input
    }

    // Push new note to notes array
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    // Clear input fields
    textArea.value = '';
    title.value = '';
    timeInput.value = ''; // Clear the time input

    // Show updated notes
    showNotes();
});

// Function to display notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj;

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
            <div>
                <div class="card">
                    <h2>${element.title}</h2>
                    <p>Teacher: ${element.textArea}</p>
                    <p>Time: ${element.time}</p> <!-- Display the time -->
                    <button onClick="deleteNote(${index})" id="${index}" class="deleteBtn">Delete Note</button>
                </div>
            </div>`;
    });

    let insertNotes = document.getElementById("notes");
    if (notesObj.length === 0) {
        insertNotes.innerHTML = `Nothing to show! Please click on "Schedule Batch" button to add a new class.`;
        insertNotes.style.color = "gray";
        insertNotes.style.paddingTop = "10px";
        insertNotes.style.fontSize = "15px";
    } else {
        insertNotes.innerHTML = html;
    }
}

// Function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj;

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // Remove note from array
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    // Show updated notes
    showNotes();
}

// Search functionality
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('datetime').innerText = `Current Date & Time: ${formattedDateTime}`;
}

// Initial call to display notes and set date/time
showNotes();
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set date and time immediately
