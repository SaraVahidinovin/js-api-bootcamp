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

//fetchAndRenderPokemons();

async function fetchAndRenderDogs() {
    const responseDog = await fetch('https://majazocom.github.io/Data/dogs.json');
    const dogs = await responseDog.json();
    console.log(dogs);

    dogs.forEach(dog => { 
        console.log (dog)
    });

    dogs.forEach(dog => {
        document.body.innerHTML += `Name: ${dog.name} - Sex: ${dog.sex} -Breed: ${dog.breed} -Owner: ${dog.owner.name} <br>`;
    });

}

fetchAndRenderDogs();