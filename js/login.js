class User{
  constructor(id,name, age, email, password, admin,dni){
    this.id = id
    this.name = name
    this.age = age
    this.email = email
    this.password = password,
    this.admin = admin
    this.dni=dni
  }
}
const users= JSON.parse(localStorage.getItem('users'))
// let users; 
// if(localStorage.getItem('users')){
//   users= JSON.parse(localStorage.getItem('users'))
// }else{
//   users= [
//     new User(1,'Martin Fanlo',32,'martin@gmail.com','123456',true),
//     new User(2,'Javier Robles',44,'javier@gmail.com','1234567',true),
//     new User(3,'Facu Trejo',25,'facu@gmail.com','12345678',true),
//     new User(4,'Luis Ledesma',41,'luis@gmail.com','123456789',true),
//     new User(5,'Valentin Quiroga',26,'valentin@gmail.com','1234567891',true),
//     new User(6,'Marcos Rigo',31,'marcos@gmail.com','12345678912',true),
//   ]
//   localStorage.setItem('users',JSON.stringify(users))
// }




const login = (e)=>{
  e.preventDefault();
  const email = document.getElementById('values-email-login').value;
  const password = document.getElementById('values-password-login').value;
  const users= JSON.parse(localStorage.getItem('users'))
  const userFound = users.find(user=>user.email===email);
  if(userFound && userFound.password===password){
    localStorage.setItem('userInfo',JSON.stringify(userFound));
    console.log(userFound);
    window.location.assign(window.location.origin + '/home.html');
 
  }else{
    alertMessage('Los datos ingresados no son correctos o no corresponden a un usuario de nuestra clinica.','#login-body')
  }
}

function alertMessage (message,queryContainer){
  let alertMessage = document.createElement('div'); 
  alertMessage.classList.add('alert','alert-danger','mt-3',"d-flex","align-items-center");
  alertMessage.setAttribute('role','alert');
  alertMessage.innerHTML =`  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  <div>
    ${message}
  </div>` ;
  let container= document.querySelector(queryContainer);
  container.appendChild(alertMessage);
  setTimeout(()=>{
    alertMessage.remove()
  },2500)
}

const register = (e)=>{
  e.preventDefault();
  const name = document.getElementById('values-name').value;
  const age = document.getElementById('values-age').value;
  const email = document.getElementById('values-email').value;
  const password = document.getElementById('values-password').value;
  const password2 = document.getElementById('values-password-2').value;
  const dni=parseFloat( document.getElementById('values-dni').value);
  const newId = new Date().getTime();
  const newUser = new User( newId, name, age, email, password, false,dni)
  if(validateFieldsRegister(name, age,dni, email, password, password2)){
   
    const usersLS = JSON.parse(localStorage.getItem('users'));
    usersLS.push(newUser);
    localStorage.setItem('users',JSON.stringify(usersLS))
    localStorage.setItem('userInfo',JSON.stringify(newUser))
    window.location.assign(window.location.origin + '/home.html');
  }else{
    alertMessage('¡UPS! ha ocurrido un error en alguno de los campos, por favor checkealo.','#register-body')
  }
}

const validateFieldsRegister = (name, age,dni, email, password, password2)=>{
  const nameOk = /^[a-zA-Z]*$/.test(name); 
  const ageOk = /^\d+$/.test(age);
  const dniOk = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(dni);
  const emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  const passOk =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) && password === password2
  if(nameOk && ageOk && dniOk&&emailOk && passOk) return true
  else return false
}
