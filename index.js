async function fetchAndRenderPokemons() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');
        const pokemons = await response.json();
        console.log(pokemons);

        pokemons.forEach(pokemon => console.log(pokemon));

    } catch {
        console.log(error);

    }
}

fetchAndRenderPokemons();