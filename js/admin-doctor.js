


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

  const  doctors= JSON.parse(localStorage.getItem('doctors'))

// LEYENDO MEDICOS

  doctors.forEach(doctor => {
    const turnosTotalesLunes = doctor.turnos['lunes'].length
    const turnosTotalesMiercoles = doctor.turnos['miercoles'].length
    const turnosTotalesViernes = doctor.turnos['viernes'].length
    const turnosTotalesSemana = turnosTotalesLunes+turnosTotalesMiercoles+turnosTotalesViernes
    const turnosOcupadosLunes= doctor.turnos["lunes"].filter(doc=>!doc.disponible).length
    const turnosOcupadosMiercoles= doctor.turnos["miercoles"].filter(doc=>!doc.disponible).length
    const turnosOcupadosViernes= doctor.turnos["viernes"].filter(doc=>!doc.disponible).length
    const turnosTotalesOcupadosSemana = turnosOcupadosLunes+turnosOcupadosMiercoles+turnosOcupadosViernes
    const doctorRow =  document.createElement('tr'); 
    doctorRow.innerHTML = `
    <th scope="row">${doctor.id}</th>
    <td>${doctor.name}</td>
    <td>${doctor.especialidad}</td>
    <td><a href="" data-bs-toggle="modal" data-bs-target="#modal-descripcion-medico${doctor.id}">VER DESCRIPCION</a></td>
    <td>${doctor.direccion}</td>
    <td><img src="${doctor.imagen}" class="img-admin"></img></td>
    <td>${doctor.telefono}</td>
    <td>${doctor.matricula}</td>
    <td id="turnos-disponibles-${doctor.id}">${turnosTotalesSemana}</td>
    <td id="turnos-ocupados-${doctor.id}">${turnosTotalesOcupadosSemana}</td>
    <td>${doctor.publicado}</td>
    <td>
    <button class="btn btn-warning d-inline" data-bs-toggle="modal" data-bs-target="#modal-editar-medico" onclick="fillFields('${doctor.id}')">✏</button>
    <button class="btn btn-danger d-inline" onclick="deleteMed('${doctor.id}')">🗑</button>
    </td>
    `
    document.querySelector('tbody').appendChild(doctorRow);
  });




  // AGREGANDO MEDICO
  const addMedico = (e) => {
    const name = document.getElementById('nombre-medico').value;
    const especialidad = document.getElementById("especialidad-medico").value;
    const descripcion = document.getElementById("descripcion-medico").value;
    const direccion = document.getElementById("direccion-medico").value;
    const imagen = document.getElementById("imagen-doctor").value;
    const telefono = document.getElementById("telefono-medico").value;
    const matricula = document.getElementById("matricula-medico").value;


    const pubSi = document.getElementById("radio-si").checked; 
   

    const newDoctor = new Doctor(new Date().getTime(), name,  especialidad, descripcion, direccion, imagen, telefono,  matricula, {lunes:[{hora:"09:00",disponible:true},{hora:"09:20",disponible:true},{hora:"09:40",disponible:true},{hora:"10:00",disponible:true},{hora:"10:20",disponible:true},{hora:"10:40",disponible:true},{hora:"11:00",disponible:true},{hora:"11:20",disponible:true},{hora:"11:40",disponible:true},{hora:"12:00",disponible:true}],miercoles:[{hora:"09:00",disponible:true},{hora:"09:20",disponible:true},{hora:"09:40",disponible:true},{hora:"10:00",disponible:true},{hora:"10:20",disponible:true},{hora:"10:40",disponible:true},{hora:"11:00",disponible:true},{hora:"11:20",disponible:true},{hora:"11:40",disponible:true},{hora:"12:00",disponible:true}],viernes:[{hora:"09:00",disponible:true},{hora:"09:20",disponible:true},{hora:"09:40",disponible:true},{hora:"10:00",disponible:true},{hora:"10:20",disponible:true},{hora:"10:40",disponible:true},{hora:"11:00",disponible:true},{hora:"11:20",disponible:true},{hora:"11:40",disponible:true},{hora:"12:00",disponible:true}]}, pubSi);
  
  doctors.push(newDoctor);

  localStorage.setItem("doctors", JSON.stringify(doctors));
  }




  // BORRANDO MEDICOS

const deleteMed = (idToRemove) => {
  const doctorsActuales = doctors.filter(doctors => doctors.id != idToRemove);
  localStorage.setItem("doctors", JSON.stringify(doctorsActuales));
  window.location.reload();
}
  


// EDITANDO MEDICOS

const fillFields = (idToEdit) => {
  const doctor = doctors.find(doctor => doctor.id == idToEdit);
    document.getElementById("nombre-medico-edit").value = doctor.name;
    document.getElementById("especialidad-medico-edit").value = doctor.especialidad;
    document.getElementById("descripcion-medico-edit").value = doctor.descripcion;
    document.getElementById("direccion-medico-edit").value = doctor.direccion;
    document.getElementById("matricula-medico-edit").value = doctor.matricula;
    document.getElementById("telefono-medico-edit").value = doctor.telefono;
    // document.getElementById("turnosDispo-medico-edit").value = doctor.turDisponible;
    document.getElementById("radio-si-edit").checked = doctor.publicado;
    document.getElementById("radio-no-edit").checked = !doctor.publicado;
    document.getElementById("edit-form").setAttribute("onsubmit", `editDoctor('${idToEdit}')`);
}

const editDoctor = (idToEdit) => {
  console.log(idToEdit)

  const doctor = doctors.find(doctor => doctor.id == idToEdit);
  const name = document.getElementById('nombre-medico-edit').value;
    const especialidad = document.getElementById("especialidad-medico-edit").value;
    const descripcion = document.getElementById("descripcion-medico-edit").value;
    const direccion = document.getElementById("direccion-medico-edit").value;
    const telefono = document.getElementById("telefono-medico-edit").value;
    const matricula = document.getElementById("matricula-medico-edit").value;
    const turnos=doctor.turnos
    const imagen = doctor.imagen
    const id = doctor.id
    const publicado=document.getElementById("radio-si-edit").checked 
  const doctorsUpdated = doctors.filter(doctor => doctor.id != idToEdit);
  const doctorUpdated = new Doctor(id, name,  especialidad, descripcion, direccion, imagen,  telefono,  matricula,  turnos,publicado);
  doctorsUpdated.push(doctorUpdated);
  localStorage.setItem("doctors", JSON.stringify(doctorsUpdated));
}



doctors.forEach(doctor => {
const divModal = document.createElement('div')
divModal.classList.add("modal", "fade")
divModal.id = (`modal-descripcion-medico${doctor.id}`)
divModal.setAttribute("tabindex","-1")
divModal.setAttribute("aria-labelledby", "exampleModalLabel")
divModal.setAttribute("aria-hidden", "true")
divModal.innerHTML=`
<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Descripción de ${doctor.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="descripcion-medico">
        <p id="descripcion">
          ${doctor.descripcion}
        </p>
      </div>
      
    </div>
  </div>
`
document.getElementById("modal-prueba").appendChild(divModal)
})







