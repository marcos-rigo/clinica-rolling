import {createFooter, createUserNavbar,createAdminNavbar} from "./helper-functions.js";
if(userLogged.admin){
  createAdminNavbar()
}else{
  createUserNavbar()
}
createFooter()
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
                        <button type="button" class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#turn-modal">Solicitá tu turno online</button>
                        
                
            </div>            
        </div>    
    </div>    
    `
let doctorContainer = document.querySelector('#doctor-container');    

doctorContainer.appendChild(doctorDetail);

// A la tabla se le podria poner colores dependiendo si el turno esta libre y en el modal de solicita tu turno rellenar los campos teniendo en cuenta los datos del usuario loggeado