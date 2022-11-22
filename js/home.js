import {createFooter, createUserNavbar, createAdminNavbar} from "./helper-functions.js";
const doctors= JSON.parse(localStorage.getItem('doctors'))
createFooter()
createUserNavbar()

doctors.forEach(doctor=> {
    const cardsDiv=document.createElement("div")
    cardsDiv.classList.add("card-group", "row","mx-auto","card-effect")
    cardsDiv.innerHTML=`
    <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12 ">
    <div class="card shadow rounded m-3" style="width: 18rem;">
                  <img src="${doctor.imagen}" class="card-img-top card-imagen" alt="${doctor.name}">
                  <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title">${doctor.name}</h5>
                    <p class="card-text">Para reservar un turno con ${doctor.name} en ${doctor.especialidad}, haz click en el siguiente boton</p>
                    <a class="btn btn-success" href="detail-doctor.html#${doctor.id}">Reservar turno</a>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".card-group").appendChild(cardsDiv)
});

const traumatologos = doctors.filter(doctor=>doctor.especialidad==="Traumatologia");
const kinesiologos = doctors.filter(doctor=>doctor.especialidad==="Kinesiologia");
console.log(kinesiologos);
const nutricionistas = doctors.filter(doctor=>doctor.especialidad==="Nutricion");
const cardiologos = doctors.filter(doctor=>doctor.especialidad==="Cardiologia");


kinesiologos.forEach(kinesiologo=>{
    const newAnchor= document.createElement("a")
    newAnchor.classList.add("ms-1")
    newAnchor.setAttribute("href",`detail-doctor.html#${kinesiologo.id}`)
    newAnchor.innerText=`>${kinesiologo.name}`
    document.querySelector(".doctores-kinesiologia").appendChild(newAnchor)
})
traumatologos.forEach(traumatologo=>{
    const newAnchor= document.createElement("a")
    newAnchor.classList.add("ms-1")
    newAnchor.setAttribute("href",`detail-doctor.html#${traumatologo.id}`)
    newAnchor.innerText=`>${traumatologo.name}`
    document.querySelector(".doctores-traumatologia").appendChild(newAnchor)
})
nutricionistas.forEach(nutricionista=>{
    const newAnchor= document.createElement("a")
    newAnchor.classList.add("ms-1")
    newAnchor.setAttribute("href",`detail-doctor.html#${nutricionista.id}`)
    newAnchor.innerText=`>${nutricionista.name}`
    document.querySelector(".doctores-nutricion").appendChild(newAnchor)
})
cardiologos.forEach(cardiologo=>{
    const newAnchor= document.createElement("a")
    newAnchor.classList.add("ms-1")
    newAnchor.setAttribute("href",`detail-doctor.html#${cardiologo.id}`)
    newAnchor.innerText=`>${cardiologo.name}`
    document.querySelector(".doctores-cardiologia").appendChild(newAnchor)
})

import { buscar } from "/js/buscador.js";
buscar()
