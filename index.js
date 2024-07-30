async function fetchAndRenderPokemons() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json'); //fetch the data
        const pokemons = await response.json(); //parse the JSON data
        console.log(pokemons);

        pokemons.forEach(pokemon => console.log(pokemon)); // Log each Pokemon object to the console

        pokemons.forEach(pokemon => {
            document.body.innerHTML += `${pokemon.name}<br>`;
        }); // Render the name of each Pokemon in the DOM


    } catch {
        console.log(error);

    }
}

fetchAndRenderPokemons();