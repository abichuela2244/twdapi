// import axios from "axios";

// async function doGetRequest() {

//   let res = await axios.get('https://api.sampleapis.com/simpsons/characters');

//   let data = res.data;
//   console.log(data);
// }

// doGetRequest();

let personajesContainer = document.getElementById('personajes')
async function logJSONData() {
    const response = await fetch("https://thewalkingdead-api.onrender.com/api/characters?");
    console.log(response)
    const jsonData = await response.json();
    console.log(jsonData);
    jsonData.map((personaje) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h1>${personaje.Name}</h1>
        <img class="fotos" src=${personaje.Image} />
        `
        personajesContainer.appendChild(div);

    })
}
logJSONData()
// let personaje.Image = document.getElementsByClassName('fotos')
// async function logJSONData() {

// }