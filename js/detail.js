import {createFooter, createUserNavbar,createAdminNavbar,logout} from "./helper-functions.js";
const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if(userLogged.admin){
  createAdminNavbar()
}else{
  createUserNavbar()
}
createFooter()
const logoutbtn = document.getElementById("logout")
logoutbtn.onclick=logout
const id = window.location.hash.slice(1);
console.log(id);
const doctors2 = JSON.parse(localStorage.getItem('doctors'));
console.log(doctors2);
const doctor = doctors2.find(doctor=> doctor.id == id);
    console.log(doctor);
    
const doctorDetail = document.createElement('div');    
    
// doctorDetail.id = doctor.id;

doctorDetail.classList.add('row', "test");

doctorDetail.innerHTML=`
<div class="row">
<div class="col-xl-6 col-lg-6">
<div class="image-doctor"> <img src="${doctor.imagen}" class="img-fluid" alt="${doctor.name}"/> </div> 
</div>
<div class="col-xl-6 col-lg-6 mt-5">
<div class="row">
<div class="col">
                    <h1 class="text-center">${doctor.name}</h1>
                </div>    
            </div>    
            <div class="row">
                <div class="col">
                    <div class="bg-body ">                
                    <p class=" lh-base">${doctor.descripcion}</p>
                    </div>
                    <div class="table-responsive-xl "> 
                        <table class="table table-bordered border-primary table-info table-responsive">
                            <thead>
                              <tr>
                               
                                <th scope="col" class="text-center">Dias</th>
                                <th colspan=10 class="text-center">Horarios de Atención</th>
                              
                              </tr>  
                            </thead>  
                            <tbody>
                              <tr>
                                
                               <td class="text-center">Lunes</td>
                               <td>9:00</td>
                               <td>9:20</td>
                               <td>9:40</td>
                               <td>10:00</td>
                               <td>10:20</td>
                               <td>10:40</td>
                               <td>11:00</td>
                               <td>11:20</td>
                               <td>11:40</td>
                               <td>12:00</td>
                            
                              </tr> 
                              <tr>
                                
                               <td class="text-center">Miércoles</td>
                               <td>9:00</td>
                               <td>9:20</td>
                               <td>9:40</td>
                               <td>10:00</td>
                               <td>10:20</td>
                               <td>10:40</td>
                               <td>11:00</td>
                               <td>11:20</td>
                               <td>11:40</td>
                               <td>12:00</td>
                              </tr> 
                              <tr>
                               
                               <td class="text-center">Viernes</td>
                               <td>9:00</td>
                               <td>9:20</td>
                               <td>9:40</td>
                               <td>10:00</td>
                               <td>10:20</td>
                               <td>10:40</td>
                               <td>11:00</td>
                               <td>11:20</td>
                               <td>11:40</td>
                               <td>12:00</td>
                              </tr> 
                            </tbody>  
                          </table>  
                        </div>  
                        <button type="button" class="btn-detail-get-turn" data-bs-toggle="modal" data-bs-target="#turn-modal">Solicitá tu turno online</button>
                        
                
            </div>            
        </div>    
    </div>    
    `
let doctorContainer = document.querySelector('#doctor-container');    

doctorContainer.appendChild(doctorDetail);

// A la tabla se le podria poner colores dependiendo si el turno esta libre y en el modal de solicita tu turno rellenar los campos teniendo en cuenta los datos del usuario loggeado
// const userToFill = userLogged
// console.log(userToFill);

const modalTurno = document.createElement("div")
modalTurno.classList.add("modal","fade")
modalTurno.setAttribute("tabindex","-1")
modalTurno.setAttribute("aria-hidden","true")
modalTurno.id = ("turn-modal")
modalTurno.innerHTML=`
<div class="modal-dialog">
<div class="modal-content modal-turno">
  <div class="modal-header-turno">
    <h5 class="modal-title" >Solicitá tu turno</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body" id="turn-body">
    <form id="form-modal">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="values-name-turn" placeholder="pepito" maxlength="50" required>
        <label for="floatingInput">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <input type="number" class="form-control" id="values-dni-turn" placeholder="Ingresá tu DNI" maxlenght="9" minlenght="8" required>
        <label for="floatingInput">DNI</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="values-email-turn" placeholder="name@example.com" maxlength="40" required>
        <label for="floatingInput">EMAIL</label>
      </div>
       
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="values-obra-turn" placeholder="XX" max="120" min="16">
        <label for="floatingInput">OBRA SOCIAL</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="values-motivo-turn" placeholder="XX" max="300" min="2" required>
        <label for="floatingInput">MOTIVO DE LA CONSULTA</label>
        <br>

        <div form method="get" action="#">
          <p>
            <label for="dwarfs">Elige un día</label>
            <select name="drawfs" id="values-dia-turn">
              <option>Lunes</option>
              <option>Miercoles</option>
              <option>Viernes</option>
            </select>
          </p>
          <p>
            <label for="favoriteOnly">Elige un horario</label>
            <select name="favoriteOnly" id="values-hora-turn">
              <option>9:00</option>
              <option>9:20</option>
              <option>9:40</option>
              <option>10:00</option>
              <option>10:20</option>
              <option>10:40</option>
              <option>11:00</option>
              <option>11:20</option>
              <option>11:40</option>
              <option>12:00</option>
            </select>
          </p>
        </div>
      <button type="submit" id="boton-modal" class="btn-modal-pedir-turno mt-4"data-bs-dismiss="modal" aria-label="Close">Pedir Turno</button>
    </form>
  </div>
</div>
</div>
`
const modalContainer = document.getElementById("open-modal-container")
modalContainer.appendChild(modalTurno)
const consultasLunes = []
const consultasMiercoles = []
const consultasViernes = [] 
class Consulta{
  constructor(id,name,email,dni,motivo,dia,hora,obra){
  this.id=id
  this.name = name
  this.email = email
  this.dni=dni
  this.motivo=motivo
  this.dia=dia
  this.hora=hora
  this.obra=obra
  }
}
const pedirturno = ()=>{
const name = document.getElementById("values-name-turn").value 
const dni = document.getElementById("values-dni-turn").value 
const email = document.getElementById("values-email-turn").value 
const motivo = document.getElementById("values-motivo-turn").value 
const dia = document.getElementById("values-dia-turn").value 
const hora = document.getElementById("values-hora-turn").value 
const obra = document.getElementById("values-obra-turn").value 
const newConsulta = new Consulta(new Date().getTime(),name,email,dni,motivo,dia,hora,obra)

if (dia=="Lunes") {
  consultasLunes.push(newConsulta)
  localStorage.setItem("consultasLunes",JSON.stringify(consultasLunes))
  
} else if(dia=="Miercoles"){
  consultasMiercoles.push(newConsulta)
  localStorage.setItem("consultasMiercoles",JSON.stringify(consultasMiercoles))
}else{
  consultasViernes.push(newConsulta)
  localStorage.setItem("consultasViernes",JSON.stringify(consultasViernes))

}

document.querySelector('#form-modal').reset();
alert("Su consulta ha sido guardada con exito")
}

const botonModal= document.getElementById("form-modal")
botonModal.onsubmit= pedirturno
console.log(consultas);
const fillmodal = () => {
  
  const userToFill = userLogged
  document.getElementById("values-name-turn").value = userToFill.name
  document.getElementById("values-dni-turn").value = userToFill.dni
  document.getElementById("values-email-turn").value = userToFill.email
}
fillmodal()
