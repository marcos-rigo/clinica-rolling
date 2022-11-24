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
    

    class Doctor{
      constructor(id,name, especialidad, descripcion, direccion, imagen, telefono,  matricula , turnos,publicado){
      this.id = id
      this.name = name
      this.especialidad = especialidad
      this.descripcion = descripcion
      this.direccion = direccion 
      this.imagen=imagen
      this.telefono = telefono 
      this.matricula = matricula 
      this.turnos=turnos
      this.publicado = publicado
      }
    }

   class Turno{
    constructor(hora,disponible){
      this.hora=hora
      this.disponible=disponible
    }
   }
    // CREACION DINAMICA DE PAGINA DE DETALLE

const doctorDetail = document.createElement('div');    
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
                    <div class="table-responsive-xl"> 
                        <table class="table table-bordered border-primary table-success table-responsive">
                            <thead>
                              <tr>
                               
                                <th scope="col" class="text-center">Dias</th>
                                <th colspan=10 class="text-center">Horarios de Atención</th>
                              
                              </tr>  
                            </thead>  
                            <tbody>
                              <tr>
                                
                               <td class="text-center">Lunes</td>
                                ${doctor.turnos.lunes.map(turno=>{
                                  return(

                                    
                                    `
                                    <td class=${turno.disponible?"bg-success":"bg-secondary"}>${turno.hora}</td>
                                    
                                    `
                                    )
                                  
                                }
                                  )}
                              </tr> 
                              <tr>
                                
                               <td class="text-center">Miércoles</td>
                               ${doctor.turnos.miercoles.map(turno=>{
                                return(

                                  
                                  `
                                  <td class=${turno.disponible?"bg-success":"bg-secondary"}>${turno.hora}</td>
                                  
                                  `
                                  )
                                
                              }
                                )}
                              </tr> 
                              <tr>
                               
                               <td class="text-center">Viernes</td>
                               ${doctor.turnos.viernes.map(turno=>{
                                return(

                                  
                                  `
                                  <td class=${turno.disponible?"bg-success":"bg-secondary"}>${turno.hora}</td>
                                  
                                  `
                                  )
                                
                              }
                                )}
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


//CREACION DINAMICA DEL MODAL
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
      <button type="submit" id="boton-modal" class="btn-modal-pedir-turno mt-4" data-bs-dismiss="modal" aria-label="Close">Pedir Turno</button>
    </form>
  </div>
</div>
</div>
`
const modalContainer = document.getElementById("open-modal-container")
modalContainer.appendChild(modalTurno)

// class Consulta{
//   constructor(id,name,email,dni,motivo,dia,hora,obra){
//   this.id=id
//   this.name = name
//   this.email = email
//   this.dni=dni
//   this.motivo=motivo
//   this.dia=dia
//   this.hora=hora
//   this.obra=obra
//   }
// }

// FUNCION PARA SOLICITAR EL TURNO
const pedirturno = (idToEdit)=>{
const dia = document.getElementById("values-dia-turn").value
const horario = document.getElementById("values-hora-turn").value 
let position= 
document.querySelector('#form-modal').reset();
alert("Su consulta ha sido guardada con exito")
if(dia.toLowerCase()=="lunes"){
  position="lunes"
}else if(dia.toLowerCase()=="miercoles"){
  position="miercoles"
}else{
  position="viernes"
}
const turnoToChange=doctor.turnos[position]

const finalTurn = turnoToChange.find(turno=>turno.hora=horario)
finalTurn.disponible=false
// const finalTurnNew= new Turno(horario,false)
console.log(finalTurn);
// console.log(finalTurnNew);
//actualizando con el cambio del turno
    const name = doctor.name
    const especialidad = doctor.especialidad
    const descripcion = doctor.descripcion
    const direccion = doctor.direccion
    const telefono = doctor.telefono
    const matricula = doctor.matricula
    const turnos=doctor.turnos
    const imagen = doctor.imagen
    const id = doctor.id
    const publicado=doctor.publicado 
  const doctorsUpdated = doctors2.filter(doctor => doctor.id != idToEdit);
  const doctorUpdated = new Doctor(id, name,  especialidad, descripcion, direccion, imagen,  telefono,  matricula,  turnos,publicado);
  doctorsUpdated.push(doctorUpdated);
  localStorage.setItem("doctors", JSON.stringify(doctorsUpdated));
}

const formModal= document.getElementById("form-modal")
formModal.onsubmit= pedirturno

//FUNCION PARA RELLENAR LOS CAMPOS DEL MODAL ANTERIOR
const fillmodal = () => {
    const userToFill = userLogged
  document.getElementById("values-name-turn").value = userToFill.name
  document.getElementById("values-dni-turn").value = userToFill.dni
  document.getElementById("values-email-turn").value = userToFill.email
}
fillmodal()


