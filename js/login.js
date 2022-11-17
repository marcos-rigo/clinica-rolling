import { navbar } from "../12-helperFunctions.js"

class User{
  constructor(id,name, age, email, password, admin){
    this.id = id
    this.name = name
    this.age = age
    this.email = email
    this.password = password,
    this.admin = admin
  }
}

let users; 
if(localStorage.getItem('users')){
  users= JSON.parse(localStorage.getItem('users'))
}else{
  users= [
    new User(1,'Martin Fanlo',32,'martin@gmail.com','123456',true),
    new User(2,'Javier Robles',44,'javier@gmail.com','1234567',true),
    new User(3,'Facu Trejo',25,'facu@gmail.com','12345678',true),
    new User(4,'Luis Ledesma',41,'luis@gmail.com','123456789',true),
    new User(5,'Valentin Quiroga',26,'valentin@gmail.com','1234567891',true),
    new User(6,'Marcos Rigo',31,'marcos@gmail.com','12345678912',true),
  ]
  localStorage.setItem('users',JSON.stringify(users))
}




const login = (e)=>{
   e.preventDefault();
   const email = document.getElementById('values-email-login').value;
  const password = document.getElementById('values-password-login').value;
  const userFound = users.find(user=>user.email===email);
  if(userFound && userFound.password===password){
    localStorage.setItem('userInfo',JSON.stringify(userFound));
    console.log(userFound);
    window.location.assign(window.location.origin + '/carrito.html');
 
  }else{
    alertMessage('credenciales invalidas','form')
  }
}

function alertMessage (message,queryContainer){
  let alertMessage = document.createElement('div'); 
  alertMessage.classList.add('alert','alert-danger','mt-3');
  alertMessage.setAttribute('role','alert');
  alertMessage.innerText = message;
  let container= document.querySelector(queryContainer);
  container.appendChild(alertMessage);
  setTimeout(()=>{
    alertMessage.remove()
  },2000)
}

const register = (e)=>{
  e.preventDefault();
  const name = document.getElementById('values-name').value;
  const age = document.getElementById('values-age').value;
  const email = document.getElementById('values-email').value;
  const password = document.getElementById('values-password').value;
  const password2 = document.getElementById('values-password-2').value;
  const newId = new Date().getTime();
  const newUser = new User( newId, name, age, email, password, false)
  if(validateFieldsRegister(name, age, email, password, password2)){
   
    const usersLS = JSON.parse(localStorage.getItem('users'));
    usersLS.push(newUser);
    localStorage.setItem('users',JSON.stringify(usersLS))
    window.location.assign(window.location.origin + '/carrito.html');
  }else{
    alertMessage('El formato es inválido','#register-body')
  }
}

const validateFieldsRegister = (name, age, email, password, password2)=>{
  const nameOk = /^[a-zA-Z]*$/.test(name); 
  const ageOk = /^\d+$/.test(age);
  const emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  const passOk =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) && password === password2
  if(nameOk && ageOk && emailOk && passOk) return true
  else return false
}


//EXPRESION REGULAR PARA CONTRASEÑA DE AL MENOS UN NUMERO Y AL MENOS UNA LETRA (MIN 8) 
// ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
//EMAIL
///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/**
 * 1- <div></div>
 * 2- <div class="alert alert-danger mt-3"></div>
 * 3- <div class="alert alert-danger mt-3" role="alert"></div>
 * 4- <div class="alert alert-danger mt-3" role="alert"> message </div>
 */

//  new Date().getTime() --> Con el objeto de fechas te crea un timestamp --> La cantidad de milisegundos que pasaron desde el 1ro de enero
// de 1970 hasta el dia de hoy

//! FORMA AVANZADA PARA VALIDAR CAMPOS EN FORMULARIO
// const register = (e)=>{
//   e.preventDefault();
//   const name = document.getElementById('values-name').value;
//   const age = document.getElementById('values-age').value;
//   const email = document.getElementById('values-email').value;
//   const password = document.getElementById('values-password').value;
//   const password2 = document.getElementById('values-password-2').value;
//   const newId = new Date().getTime();
//   const newUser = new User( newId, name, age, email, password, false);
//   const errors = validateFieldsRegister(name, age, email, password, password2)
//   if(Object.keys(errors).length===0){
//     // ACTUALIZACIÓN EN LS
//     const usersLS = JSON.parse(localStorage.getItem('users'));
//     usersLS.push(newUser);
//     localStorage.setItem('users',JSON.stringify(usersLS))
//     window.location.assign(window.location.origin + '/carrito.html');
//   }else{
//     Object.values(errors).map(error=>{
//       alertMessage(error,'#register-body')
//     })
//   }
// }

// const validateFieldsRegister = (name, age, email, password, password2)=>{
//   let errors = {};
//   const nameOk = /^[a-zA-Z]*$/.test(name); 
//   if(!nameOk) errors.name = 'El nombre ha sido escrito mal'
//   const ageOk = /^\d+$/.test(age);
//   if(!ageOk) errors.age = 'La edad ha sido escrita mal'
//   const emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//   if(!emailOk) errors.email = 'email ha sido escrita mal'
//   const passOk =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) && password === password2
//   if(!passOk) errors.password = 'password ha sido escrita mal'
//   return errors
// }
// // {
  
// // }
// // Object.keys(errores) []
// // Object.values(errores) ['hola','chau']

navbar()