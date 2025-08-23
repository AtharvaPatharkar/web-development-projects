// JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const hungerLevel = document.getElementById('hunger-level');
    const energyLevel = document.getElementById('energy-level');
    const happinessLevel = document.getElementById('happiness-level');
    const petImage = document.getElementById('pet-image');

    let hunger = 50;
    let energy = 50;
    let happiness = 50;

    const updateStatus = () => {
        hungerLevel.textContent = hunger;
        energyLevel.textContent = energy;
        happinessLevel.textContent = happiness;

        if (hunger > 70) {
            petImage.src = "hungry-pet.png";
        } else if (happiness < 30) {
            petImage.src = "sad-pet.png";
        } else if (energy < 30) {
            petImage.src = "tired-pet.png";
        } else {
            petImage.src = "happy-pet.png";
        }
    };

    const adjustStatus = () => {
        hunger += 5;
        energy -= 5;
        happiness -= 5;

        hunger = Math.min(Math.max(hunger, 0), 100);
        energy = Math.min(Math.max(energy, 0), 100);
        happiness = Math.min(Math.max(happiness, 0), 100);

        updateStatus();
    };

    document.getElementById('feed-btn').addEventListener('click', () => {
        hunger -= 10;
        happiness += 5;
        updateStatus();
    });

    document.getElementById('play-btn').addEventListener('click', () => {
        energy -= 10;
        happiness += 15;
        hunger += 5;
        updateStatus();
    });

    document.getElementById('rest-btn').addEventListener('click', () => {
        energy += 15;
        happiness -= 5;
        hunger += 5;
        updateStatus();
    });

    setInterval(adjustStatus, 5000);
});
