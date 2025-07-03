// JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-fill');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {
        progressBar.style.width = '0%';
        let progress = 0;

        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);
                alert("Task Completed!");
            }
        }, 50); // Adjust speed here
    });
});
