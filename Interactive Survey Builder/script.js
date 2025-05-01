// JavaScript file
document.getElementById("addQuestion").addEventListener("click", function () {
    const questionType = document.getElementById("questionType").value;
    const questionText = document.getElementById("questionText").value.trim();

    if (!questionText) {
        alert("Please enter a question!");
        return;
    }

    const questionList = document.getElementById("questionList");
    const listItem = document.createElement("li");

    if (questionType === "text") {
        listItem.innerHTML = `
            <p>${questionText}</p>
            <input type="text" placeholder="Your answer here">
        `;
    } else if (questionType === "multipleChoice") {
        listItem.innerHTML = `
            <p>${questionText}</p>
            <ul>
                <li><input type="radio" name="${questionText}"> Option 1</li>
                <li><input type="radio" name="${questionText}"> Option 2</li>
                <li><input type="radio" name="${questionText}"> Option 3</li>
            </ul>
        `;
    }

    questionList.appendChild(listItem);
    document.getElementById("questionText").value = "";
});
