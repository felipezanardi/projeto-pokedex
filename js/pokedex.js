const api = "https://pokeapi.co/api/v2/";

async function fetchData()
{
    try
    {
        const pokemonInput = document.getElementById("pokemon-input").value.toLowerCase();
        const response = await fetch(api + `pokemon/${pokemonInput}`);

        if(!response.ok)
        {
            throw new Error("Não foi possível encontrar dados");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.other.home.front_default;
        const pokemonImg = document.getElementById("pokemon-img");

        pokemonImg.src = pokemonSprite;
    }
    catch(error)
    {
        console.error(error);
    }
}
