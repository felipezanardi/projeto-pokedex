const api = "https://pokeapi.co/api/v2/";

// elementos html
const pokemon_nome = document.getElementById("pokemon-nome");
const pokemon_img = document.getElementById("pokemon-img");
const pokemon_desc = document.getElementById("pokemon-desc");
const pokemon_tipos = document.getElementById("pokemon-tipos");

const pokemon_hp = document.getElementById("pokemon-hp");
const pokemon_atk = document.getElementById("pokemon-atk");
const pokemon_def = document.getElementById("pokemon-def");
const pokemon_atk_esp = document.getElementById("pokemon-atk-esp");
const pokemon_def_esp = document.getElementById("pokemon-def-esp");
const pokemon_vel = document.getElementById("pokemon-vel");

const num_hp = document.getElementById("num-hp");
const num_atk = document.getElementById("num-atk");
const num_def = document.getElementById("num-def");
const num_atk_esp = document.getElementById("num-atk-esp");
const num_def_esp = document.getElementById("num-def-esp");
const num_vel = document.getElementById("num-vel");

const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-button");

// busca
search_button.addEventListener("click", () => {
  if (search_input.value.trim() === "")
  {
    alert("Digite o nome ou o ID de um Pokémon...");
  }
  else
  {
    buscar_pokemon(search_input.value.toLowerCase());
    search_input.value = "";
  }
});

// pesquisar pressionando 'enter'
search_input.addEventListener("keyup", (event) => {
  if (event.key === "Enter")
  {
    search_button.dispatchEvent(new MouseEvent("click"));
  }
});

// função para buscar pokemon
function buscar_pokemon(nome_id)
{
  fetch(api + `pokemon/${nome_id}`)
    .then((data) => data.json())
    .then((json) => {
      document.getElementById("pokemon-id").innerHTML = json.id;
      pokemon_nome.innerHTML = json.name;
      pokemon_img.src = json.sprites.other.home.front_default;

      // buscar descrição do pokemon
      fetch(api + `pokemon-species/${json.id}`)
        .then((data) => data.json())
        .then((info) => {
          const lang = info.flavor_text_entries.find(
            (lang) => lang.language.name === "en"
          );
          if (lang)
          {
            pokemon_desc.innerHTML = lang.flavor_text.replace(/\f/g, " ");
          }
          else
          {
            pokemon_desc.innerHTML = "Descrição não disponível.";
          }
        });

      // stats
      pokemon_hp.value = json.stats[0].base_stat;
      pokemon_atk.value = json.stats[1].base_stat;
      pokemon_def.value = json.stats[2].base_stat;
      pokemon_atk_esp.value = json.stats[3].base_stat;
      pokemon_def_esp.value = json.stats[4].base_stat;
      pokemon_vel.value = json.stats[5].base_stat;

      // stats (num)
      num_hp.innerHTML = json.stats[0].base_stat;
      num_atk.innerHTML = json.stats[1].base_stat;
      num_def.innerHTML = json.stats[2].base_stat;
      num_atk_esp.innerHTML = json.stats[3].base_stat;
      num_def_esp.innerHTML = json.stats[4].base_stat;
      num_vel.innerHTML = json.stats[5].base_stat;

      pokemon_tipos.innerHTML = ""; // reseta os tipos do pokemon
      
      // mostrar tipo(s) do pokemon
      if (json.types.length == 2)
      {
        pokemon_tipos.innerHTML += `<p class="${json.types[0].type.name}">${json.types[0].type.name}</p>`;

        pokemon_tipos.innerHTML += `<p class="${json.types[1].type.name}">${json.types[1].type.name}</p>`;
      }
      else
      {
        pokemon_tipos.innerHTML += `<p class="${json.types[0].type.name}">${json.types[0].type.name}</p>`;
      }
    })
    .catch((error) => console.error("Erro ao buscar Pokémon:", error)); // reportar erro no console
}

// carregar a página com o id 1
window.onload = () => {
  buscar_pokemon(1);
};
