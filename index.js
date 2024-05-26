const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const myImage = document.getElementById("myImage");

async function fetchPokemon() {
    try {
        const name = myInput.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch Pokemon");
        }
        
        const data = await response.json();
        const sprite = data.sprites.front_default;
        
        myImage.src = sprite;
        myImage.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}

mySubmit.onclick = fetchPokemon;
