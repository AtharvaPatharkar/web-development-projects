// JavaScript file
const tasks = document.querySelectorAll(".task");
const priorityZones = document.querySelectorAll(".priority-zone");

tasks.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});

priorityZones.forEach((zone) => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
    zone.addEventListener("drop", dragDrop);
});

let draggedTask = null;

function dragStart() {
    draggedTask = this;
    setTimeout(() => this.classList.add("hidden"), 0);
}

function dragEnd() {
    this.classList.remove("hidden");
    draggedTask = null;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
}

function dragLeave() {
    this.classList.remove("hovered");
}

function dragDrop() {
    this.classList.remove("hovered");
    this.appendChild(draggedTask);
}
