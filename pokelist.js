
document.addEventListener("DOMContentLoaded", function() {

    // PUNTO DE PINTADO
    const listaPokemon = document.querySelector(".card-list-pokemon");

    const URL = "https://pokeapi.co/api/v2/pokemon/";

    
    // ********************
    // CAMBIO DE GENERACION
    // ********************
    
    const btnsGeng = {};

    for (let g = 1; g <= 8; g++) {
        btnsGeng[`btn${g}Geng`] = document.querySelector(`#btn-${g}-gen`);
    }

    let limitDown, limitUp;

    function loadGeneration(limit1, limit2) {
        limitDown = limit1;
        limitUp = limit2;
        pokemonData.length = 0; // Clear previous data
        listaPokemon.innerHTML = ""; // Clear previous list
        fetchAndDisplayPokemon();
    }

    for (let i = 1; i <= 8; i++) {
        btnsGeng[`btn${i}Geng`].addEventListener('click', () => {
            switch (i) {
                case 1:
                    loadGeneration(1, 151);
                    break;
                case 2:
                    loadGeneration(152, 251);
                    break;
                case 3:
                    loadGeneration(252, 386);
                    break;
                case 4:
                    loadGeneration(387, 493);
                    break;
                case 5:
                    loadGeneration(494, 649);
                    break;
                case 6:
                    loadGeneration(650, 721);
                    break;
                case 7:
                    loadGeneration(722, 809);
                    break;
                case 8:
                    loadGeneration(810, 905);
                    break;
            }
        });
    }

    // Array to keep track of fetched Pokemon data
    const pokemonData = [];




    // *****************
    // FETCH DE BUSQUEDA
    // *****************


    // Function to fetch and display Pokemon
    function fetchAndDisplayPokemon() {
        const promises = [];
        for (let i = limitDown; i <= limitUp; i++) {
           promises.push(fetch(URL + i).then(response => response.json()));
        }

        Promise.all(promises)
        .then(data => {
            const filteredData = data.filter(pokemon => {
                if (window.Miobjeto.Lista.length === 0) {
                    return true; // Si la lista está vacía, no hay filtro, devuelve true para todos
                } else {
                    // Filtra los datos por los tipos presentes en window.Miobjeto.Lista
                    const tipos = pokemon.types.map(type => type.type.name);
                    return tipos.some(tipo => window.Miobjeto.Lista.includes(tipo));
                }
            });

            // Sort the filtered Pokemon data by ID before displaying
            filteredData.sort((a, b) => a.id - b.id);
            // Display each filtered Pokemon
            filteredData.forEach(poke => mostrarPokemon(poke));
        })
            .catch(error => console.error('Error fetching Pokemon:', error));
    }


    // *****************
    // PINTADO DE CARTAS
    // *****************

    function mostrarPokemon(poke) {
        const type1 = poke.types[0].type.name;
        const type2 = poke.types.length > 1 ? poke.types[1].type.name : null;

        const div = document.createElement("a");
        div.classList.add("card-pokemon");
        div.setAttribute("href", `pokemon.html?id=${poke.id}`);
        div.innerHTML = `
            <div class="card-img">
                <img
                    src="${poke.sprites.other["official-artwork"].front_default}"
                    alt="pokemon ${poke.name}"
                />
            </div>
            <div class="card-info">
                <span class="pokemon-id">N°${poke.id}</span>
                <h3>${poke.name}</h3>
                <div class="card-types">
                    <span class="${type1}">${type1}</span>
                    ${type2 ? `<span class="${type2}">${type2}</span>` : ''}
                </div>
            </div>
        `;
        listaPokemon.appendChild(div);
    }

    // Load first generation by default
    loadGeneration(1, 151);
});
