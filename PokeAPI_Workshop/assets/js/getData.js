//Url APi save as variable





//Get values from API (Get)

let lista = document.getElementById("listpokemon")
let game= document.getElementById("game");

const getData =(id, num) => {

    return  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    .then((response) => {
         response.json()
          .then((pokemon) => {
            pokiCheckData(pokemon, num)
          })
     })   

    //.then((json)=>{ 
    //    pokiCheckData(json); })
      
     
    .catch((error) =>{
        console.log("Error :" ,error)
    })
   

}

const randomPokiGenerator = () => {
    let firstId  = Math.floor(Math.random() *50);
    let secondId = Math.floor(Math.random() *50);
    getData(firstId, 1);
    getData(secondId, 2);
}


const pokiCheckData = (pokemon, num) => {

    let item = lista.querySelector(`#pokemon-${num}`);

    let image = item.getElementsByTagName("img")[0]
    image.setAttribute("src", pokemon.sprites.front_default)

    let nombre =item.getElementsByTagName("p")[0]
    nombre.textContent= pokemon.name;
    
   
}


//run function get Data from API
game.onclick = function (){
    randomPokiGenerator()
}


