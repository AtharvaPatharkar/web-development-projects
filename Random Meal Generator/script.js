// JavaScript file
const mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

async function getRandomMeal() {
    try {
        const response = await fetch(mealApiUrl);
        const data = await response.json();
        const meal = data.meals[0];

        // Displaying the meal details
        document.getElementById("meal-name").textContent = meal.strMeal;
        document.getElementById("meal-image").src = meal.strMealThumb;
        document.getElementById("meal-image").alt = meal.strMeal;
        document.getElementById("instructions").textContent = meal.strInstructions;

        const ingredientsList = document.getElementById("ingredients-list");
        ingredientsList.innerHTML = "";
        
        // Loop through ingredients and display
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient) {
                const li = document.createElement("li");
                li.textContent = `${ingredient} - ${measure}`;
                ingredientsList.appendChild(li);
            }
        }

        // Show meal details
        document.getElementById("meal-details").classList.remove("hidden");
    } catch (error) {
        console.error("Error fetching meal data:", error);
    }
}
