// script.js

const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {
    const title = document.getElementById("event-title").value;
    const date = document.getElementById("event-date").value;
    const time = document.getElementById("event-time").value;
    const location = document.getElementById("event-location").value;
    const description = document.getElementById("event-description").value;

    document.getElementById("preview-title").textContent = title || "[Event Title]";
    document.getElementById("preview-date").textContent = date || "[Date]";
    document.getElementById("preview-time").textContent = time || "[Time]";
    document.getElementById("preview-location").textContent = location || "[Location]";
    document.getElementById("preview-description").textContent = description || "[Description]";

    downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", () => {
    const card = document.getElementById("invitation-card");

    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "event-invitation.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Error capturing the invitation card:", err);
    });
});
