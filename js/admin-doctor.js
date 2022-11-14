// class Doctor{
//     constructor(id,name, especialidad, matricula, direccion, telefono, turDisponible, turOcupado,publicado){
//     this.id = id
//     this.name = name
//     this.especialidad = especialidad
//     this.matricula = matricula 
//     this.direccion = direccion 
//     this.telefono = telefono 
//     this.turDisponible = turDisponible
//     this.turOcupado = turOcupado
//     this.publicado = publicado
//     }
//   }
  
  
let doctors; 
if(localStorage.getItem('doctors')){
    doctors= JSON.parse(localStorage.getItem('doctors'))
}else{
    doctors= [
    new Doctor(1,'Valentin E. Galarga','Traumatologia','123456', 'Aguilares', '3875666444', 'descripcion', '15', '5', true),
    new Doctor(2,'Luis Espeche','Kinesiologia','123456','San Miguel de Tucumán', '3815666444','descripcion', '15', '3', true),
    new Doctor(3,'Ignacio Talarga','Cardiologia','123456','Aguilares', '3875666444','descripcion', '15', '5', true),
    new Doctor(4,'Maria D. Fuertes','Nutricion','123456','Aguilares', '3875666444','descripcion', '15', '5', true),
    new Doctor(5,'Micaela Bezona','Kinesiologia','123456','Aguilares', '3875666444','descripcion', '15', '5', true),
    ]
    localStorage.setItem('doctors',JSON.stringify(doctors))
}


  doctors.forEach(doctor => {
    const doctorRow =  document.createElement('tr'); 
    doctorRow.innerHTML = `
    <th scope="row">${doctor.id}</th>
    <td>${doctor.name}</td>
    <td>${doctor.especialidad}</td>
    <td>${doctor.matricula}</td>
    <td>${doctor.direccion}</td>
    <td>${doctor.telefono}</td>
    <td>${doctor.descripcion}</td>
    <td>${doctor.turDisponible}</td>
    <td>${doctor.turOcupado}</td>
    <td>${doctor.publicado}</td>
    `
    document.querySelector('tbody').appendChild(doctorRow);
  });



