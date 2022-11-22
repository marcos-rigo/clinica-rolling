


class Doctor{
  constructor(id,name, especialidad, descripcion, direccion, imagen, telefono,  matricula , turDisponible, turOcupado,publicado){
  this.id = id
  this.name = name
  this.especialidad = especialidad
  this.descripcion = descripcion
  this.direccion = direccion 
  this.imagen=imagen
  this.telefono = telefono 
  this.matricula = matricula 
  this.turDisponible = turDisponible
  this.turOcupado = turOcupado
  this.publicado = publicado
  }
}

  const  doctors= JSON.parse(localStorage.getItem('doctors'))

// LEYENDO MEDICOS

  doctors.forEach(doctor => {
    const doctorRow =  document.createElement('tr'); 
    doctorRow.innerHTML = `
    <th scope="row">${doctor.id}</th>
    <td>${doctor.name}</td>
    <td>${doctor.especialidad}</td>
    <td><a href="" data-bs-toggle="modal" data-bs-target="#modal-descripcion-medico">VER DESCRIPCION</a></td>
    <td>${doctor.direccion}</td>
    <td><img src="${doctor.imagen}" class="img-admin"></img></td>
    <td>${doctor.telefono}</td>
    <td>${doctor.matricula}</td>
    <td>${doctor.turDisponible}</td>
    <td>${doctor.turOcupado}</td>
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
    const telefono = document.getElementById("telefono-medico").value;

    const matricula = document.getElementById("matricula-medico").value;
    const turDisponible = document.getElementById("turnosDispo-medico").value;

    const newDoctor = new Doctor(new Date().getTime(), name,  especialidad, descripcion, direccion, "", telefono,  matricula,  turDisponible, "", "");
  
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
    document.getElementById("turnosDispo-medico-edit").value = doctor.turDisponible;
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
    const turDisponible = document.getElementById("turnosDispo-medico-edit").value;
    const imagen = doctor.imagen
    const id = doctor.id
  const doctorsUpdated = doctors.filter(doctor => doctor.id != idToEdit);
  const doctorUpdated = new Doctor(id, name,  especialidad, descripcion, direccion, imagen,  telefono,  matricula,  turDisponible);
  doctorsUpdated.push(doctorUpdated);
  localStorage.setItem("doctors", JSON.stringify(doctorsUpdated));
}


  


