const aplicacion = document.querySelector(".container");

let image = document.querySelector("#img1");
let nombre = document.querySelector("#nombre");
let image2 = document.querySelector("#img2");
let nombre2 = document.querySelector("#nombre2");

function equipo1 (logo, nombreEquipo){
  image.setAttribute("src", logo);
  nombre.innerHTML = nombreEquipo;
}
function equipo2(logo, nombreEquipo){
  image2.setAttribute("src" ,logo);
  nombre2.innerHTML = nombreEquipo;
}

let key = "301430a416d0045c0f7401cbb14972d89641c8c959e1273358d83f49897fe834";
const url = "https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=";

function mostrarEquipo(idEquipo, funcionEquipo){
  fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`)
    .then(res => res.json())
    .then(equipos => {
      funcionEquipo(
        equipos.result[0].team_logo,
        equipos.result[0].team_name
      )
    })
}

mostrarEquipo(28, equipo1);
mostrarEquipo(10, equipo2);

fetch(`${url}${key}`)
  .then(res => res.json())
  .then(equipo => console.log(equipo))