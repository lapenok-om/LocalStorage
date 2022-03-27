import { fillPokemonCard, getPokemonByNameOrId } from './const.js';
import { Pokemon } from './classes.js';
const form = document.querySelector('.search');
const pokemonList = localStorage.getItem('pokemonList');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
        pokemonName: { value },
    } = event.target;
    // 1 - empty input
    // 2 - case sensetive
    // 3 - alert if no pokemon

    if (!value) {
        alert('Введите имя покемона плиииз');
    } else {
        try {
            const pokemon = await getPokemonByNameOrId(value.toLowerCase());
            fillPokemonCard(pokemon);

            let array = JSON.parse(localStorage.getItem('pokemonList'));
            if (array==null) array = [];
            array.push(pokemon);
            localStorage.setItem('pokemonList', JSON.stringify(array));

        } catch (error) {
            alert(error.message);
        }

      
    }
});

if (pokemonList != null){
    let arr = JSON.parse(localStorage.getItem('pokemonList'));
    arr.forEach(element => {
        fillPokemonCard(element);
    });
}

