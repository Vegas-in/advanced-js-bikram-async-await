//DESARROLLA AQUI TUS SOLUCIONES

//ejercicio 1

/* async function getRandomPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");
    let data = await response.json();
    let pokeRandom = data.results
            let numRandom = Math.floor(Math.random()*pokeRandom.length)                
            let pokeFinal = pokeRandom[numRandom]
            let consulta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeFinal}`);
            let resultadoFinal = await consulta.json();
            return resultadoFinal
  } */
  
  async function getRandomPokemon () {
    let pokemonList = await fetch (`https://pokeapi.co/api/v2/pokemon/`) 
    let data = await pokemonList.json(); 
    let tamano = data.results.length; 
    let random = Math.ceil(Math.random() * tamano);
    let respuesta2 = await fetch (`https://pokeapi.co/api/v2/pokemon/${random}`); 
    let resultado2 = await respuesta2.json(); 
    return resultado2;
}


//ejercicio 2

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

//ejercicio 3

async function printImageAndName (){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return document.getElementsByTagName("body").innerHtml += `html
                <section>
                <img src="${img}" alt="nombre del pokemon">
                    <h1>${name}</h1>
                </section>
            `;
    
}


//ejercicio 4

async function getRandomDogImage () {
    let dogList = await fetch (`https://dog.ceo/api/breeds/image/random`) 
    let data = await dogList.json(); 
    let imgRandom = data.message
    return imgRandom
}


//ejercicio  5 

async function getRandomPokemonImage () {
    let pokemonList = await fetch (`https://pokeapi.co/api/v2/pokemon/`) 
    let data = await pokemonList.json(); 
    let tamano = data.results.length;
    let random = Math.ceil(Math.random() * tamano); 
    let respuesta2 = await fetch (`https://pokeapi.co/api/v2/pokemon/${random}`); 
    let resultado2 = await respuesta2.json();
    let img = resultado2.sprites.front_default;
    return img
}


//ejercicio 6 

async function printPugVsPikachu () {
    let pokemon = await fetch (`https://pokeapi.co/api/v2/pokemon/pikachu`) 
    let data = await pokemon.json(); 
    let imgPikachu = data.sprites.front_default;
    let dog = await fetch (`https://dog.ceo/api/breed/pug/images`); 
    let data2 = await dog.json();
    let imgDog = data2.message[3];
    return document.querySelector("body").innerHTML = `html
                <section>
                <img src="${imgPikachu}" alt="nombre del pokemon">
                    <h1>Pikachu</h1>

                    <h2>VS</h2>

                <img src="${imgDog}" alt="nombre del pokemon">
                    <h1>Pug</h1>
                </section>`;
}


// ejercicio 7

async function getRandomCharacter () {

    let rickList = await fetch (`https://rickandmortyapi.com/api/character`) // pillamos la lista total de personajes
    let data = await rickList.json(); // devolvemos la lista total y pasamos a json
    
    let tamano = data.results.length; // declara el tamaño total de results
    let random = Math.ceil(Math.random() * tamano); // se obtiene un numero random entre 1 y el tamaño total
    
    let respuesta2 = await fetch (`https://rickandmortyapi.com/api/character/${random}`); // devuelve un pokemon random
    let resultado2 = await respuesta2.json(); // pasamos a json

    return resultado2;

}

// 8 - Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo () {

    /* RICK SANCHEZ 1 */
    let rickSanchez = await fetch (`https://rickandmortyapi.com/api/character/1`) // pillamos a rick de la lista
    let data = await rickSanchez.json(); // devolvemos a rick y pasamos a json

    let img = data.image; // sacamos la imagen
    let name = data.name; // sacamos el nombre
    let episodes = data.episode; // numero de episodios en los que aparece
    let primerEpisodio = data.episode[0];

    
    /* EPISODIO 1 */
    let nombrePrimerEpisodio = await fetch (`${primerEpisodio}`)
    let data2 = await nombrePrimerEpisodio.json();

    let firstEpisode = data2.name; // nombre del primer episiodio en el que aparece
    let dateEpisode = data2.air_date; // fecha de publicacion de primer episodio


    return {img, name, episodes, firstEpisode, dateEpisode};

}

// 9 - Pinta los anteriores datos en el DOM (no se testea)
async function pintarEnDom () {
let data = await getRandomCharacterInfo();
document.querySelector('body').innerHTML +=
                                `<section>
                                    <h1>${data.name}</h1>
                                    <img src="${data.img}" alt="Rick Sanchez">
                                    <h3>Episodes: ${data.episodes}</h3>
                                    <h3>First episode: ${data.fir}</h3>
                                    <h4>First episode: ${data.dateEpisode}</h4>`
}