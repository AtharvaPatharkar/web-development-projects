// JavaScript file
document.addEventListener("DOMContentLoaded", () => {
    const waterBtn = document.getElementById("water-btn");
    const feedBtn = document.getElementById("feed-btn");
    const sunBtn = document.getElementById("sun-btn");
    const healthDisplay = document.getElementById("health");
    const growthStageDisplay = document.getElementById("growth-stage");
    const plantImage = document.getElementById("plant-image");

    let health = 50;
    let growthStage = 0; // 0: seedling, 1: small plant, 2: mature plant

    const stages = [
        { name: "Seedling", image: "plant-seedling.png" },
        { name: "Small Plant", image: "plant-small.png" },
        { name: "Mature Plant", image: "plant-mature.png" },
    ];

    function updatePlant() {
        healthDisplay.textContent = health;

        if (health >= 30 && health < 70) {
            growthStage = 1;
        } else if (health >= 70) {
            growthStage = 2;
        } else {
            growthStage = 0;
        }

        growthStageDisplay.textContent = stages[growthStage].name;
        plantImage.src = stages[growthStage].image;

        // Animation for growth
        plantImage.style.transform = "scale(1.1)";
        setTimeout(() => {
            plantImage.style.transform = "scale(1)";
        }, 300);
    }

    waterBtn.addEventListener("click", () => {
        if (health < 100) {
            health += 10;
        }
        updatePlant();
    });

    feedBtn.addEventListener("click", () => {
        if (health < 100) {
            health += 15;
        }
        updatePlant();
    });

    sunBtn.addEventListener("click", () => {
        if (health < 100) {
            health += 5;
        }
        updatePlant();
    });
});
