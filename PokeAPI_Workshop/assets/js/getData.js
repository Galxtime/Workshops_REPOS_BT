
//Get values from API (Get)

let lista = document.getElementById("listpokemon")
let game= document.getElementById("game");


const getDataPoki =(id, num) => {

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
    getDataPoki(firstId, 1);
    getDataPoki(secondId, 2);
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



   //URL de la API
const API = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=00";

// Obtener resultado de API
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json), paginacion(json);
        })
        .catch((error) => {
            console.log("Error :", error);
        });
};

const llenarDatos = (data) => {
    let html = "";
    document.getElementById("datosPersonajes").innerHTML= "";
    data.results.forEach((pj) => {
        const pokeURL = pj.url;
        return fetch(pokeURL)
        
            .then((response) => response.json())
            .then((json) => {
                fillOutPics(json,html)
            })
            .catch((error) => {
                console.log("Error :", error);
            });
    });
};

const fillOutPics = (data, html) => {

        
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">';
        html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">`;
        html += '<div class="card-body">';
        html += `<h5 class = "card-title" >${data.name}</h5>`;
        html += `<p class="card-text">Altura :${data.height}</p>`;
        html += `<p class="card-text">Peso :${data.weight}</p>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
       document.getElementById("datosPersonajes").innerHTML += html;
};

// Paginacion
const paginacion = (info) => {
   
    let html = "";
    html += `<li class="page-item ${info.previous ? "" :"disabled"}"><a class="page-link" onclick="getData('${info.previous}')">Previous</a></li>`;
    html += `<li class="page-item ${info.next ? "" : "disabled"}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML = html;
};

//EjecutargetData
getData(API); 





