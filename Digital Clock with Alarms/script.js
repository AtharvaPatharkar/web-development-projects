// JavaScript file
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const alarmForm = document.getElementById("alarmForm");
const alarmMessage = document.getElementById("alarmMessage");

let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
    dateElement.textContent = now.toLocaleDateString();
}

setInterval(updateTime, 1000);

alarmForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
    const alarmInput = document.getElementById("alarmTime").value;
    if (alarmInput) {
        const [hours, minutes] = alarmInput.split(":");
        const alarmDate = new Date();
        alarmDate.setHours(hours, minutes, 0, 0);
        const timeToAlarm = alarmDate - new Date();

        if (timeToAlarm >= 0) {
            alarmMessage.textContent = "Alarm set!";
            alarmTimeout = setTimeout(() => {
                alarmMessage.textContent = "⏰ Alarm ringing!";
                alert("⏰ Alarm ringing!");
            }, timeToAlarm);
        } else {
            alarmMessage.textContent = "Please set a future time!";
        }
    }
});
