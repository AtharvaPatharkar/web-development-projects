// JavaScript file
const emojis = [
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", 
    "😘", "😗", "😙", "😚", "🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", 
    "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "🤓", "😛", "😜", 
    "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞",
    "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "😳", 
    "🤪", "😵", "🥴", "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇",
    "🥳", "🥺", "🥰", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "😎"
];

const emojiList = document.getElementById("emojiList");
const emojiSearch = document.getElementById("emojiSearch");

// Populate all emojis
function renderEmojis(filter = "") {
    emojiList.innerHTML = "";
    emojis
        .filter(emoji => emoji.includes(filter))
        .forEach(emoji => {
            const emojiItem = document.createElement("div");
            emojiItem.classList.add("emoji-item");
            emojiItem.textContent = emoji;
            emojiItem.addEventListener("click", () => {
                navigator.clipboard.writeText(emoji).then(() => {
                    alert(`Copied: ${emoji}`);
                });
            });
            emojiList.appendChild(emojiItem);
        });
}

emojiSearch.addEventListener("input", () => {
    renderEmojis(emojiSearch.value.trim());
});

// Initialize
renderEmojis();
