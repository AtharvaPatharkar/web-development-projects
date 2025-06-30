// JavaScript file
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

document.getElementById("searchBtn").addEventListener("click", () => {
    const searchInput = document.getElementById("search").value.toLowerCase().trim();
    if (!searchInput) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }
    fetchPokemon(searchInput);
});

async function fetchPokemon(query) {
    try {
        const response = await fetch(`${apiUrl}${query}`);
        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayPokemon(data) {
    const pokemonCard = document.getElementById("pokemon-card");
    document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
    document.getElementById("pokemon-image").src = data.sprites.other["official-artwork"].front_default;
    document.getElementById("pokemon-type").innerText = data.types.map(type => type.type.name).join(", ");
    document.getElementById("pokemon-abilities").innerText = data.abilities.map(ability => ability.ability.name).join(", ");
    pokemonCard.classList.remove("hidden");
}
