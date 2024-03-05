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

