// JavaScript file
document.addEventListener("DOMContentLoaded", () => {
    const joinRoomButton = document.getElementById("join-room");
    const usernameInput = document.getElementById("username");
    const roomInput = document.getElementById("room");
    const chatRoom = document.querySelector(".chat-room");
    const roomSelection = document.querySelector(".room-selection");
    const messagesDiv = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendMessageButton = document.getElementById("send-message");

    joinRoomButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const room = roomInput.value.trim();

        if (username && room) {
            roomSelection.classList.add("hidden");
            chatRoom.classList.remove("hidden");
            displayMessage(`Welcome, ${username}! You joined room: ${room}`);
        }
    });

    sendMessageButton.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message) {
            displayMessage(`You: ${message}`);
            messageInput.value = "";
        }
    });

    function displayMessage(text) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = text;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});
