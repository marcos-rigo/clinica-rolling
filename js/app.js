//Base de datos de usuarios, diferenciando administradores de pacientes
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
    new User(1,'Marcos Rigo',31,'marcos@gmail.com','123456',true),
    new User(2,'Javier Robles',44,'javier@gmail.com','123456',true),
    new User(3,'Facundo Trejo',25,'facu@gmail.com','123456',true),
    new User(4,'Luis Ledesma',39,'luis@gmail.com','123456',true),
    new User(5,'Martin Fanlo',33,'martingmail.com','123456',true),
    new User(6,'Valentin Quiroga',27,'valentin@gmail.com','123456',false),
    ]
    localStorage.setItem('users',JSON.stringify(users))
}

const createLoginNavbar= ()=>{
    const navbar=document.createElement("nav");
    navbar.classList.add("navbar","navbar-expand-lg", "sticky-top", "bg-clinica");
    navbar.innerHTML=`
    <div class="container-fluid">
          <a href="index.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="100px" height="70px">          
          </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link btn btn-sm m-1 btn-outline-primary" aria-current="page" data-bs-toggle="modal" data-bs-target="#exampleModal">Ingresar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-sm m-1 btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear cuenta</a>
                </li>
            </div>
          </div>   
    `;
    const header=document.querySelector("header")
    header.appendChild(navbar)
}
const createAdminNavbar= ()=>{
    const navbar=document.createElement("nav");
    navbar.classList.add("navbar","navbar-expand-lg", "sticky-top", "bg-clinica");
    navbar.innerHTML=`
    <div class="container-fluid">
          <a href="index.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="100px" height="70px">          
          </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">ADMINISTRACION</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">SOPORTE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-sm btn-outline-danger" href="">CERRAR SESION</a>
                </li>
            </div>
          </div>  
    `
    const header=document.querySelector("header");
    header.appendChild(navbar);
}
const createUserNavbar= ()=>{
    const navbar=document.createElement("nav");
    navbar.classList.add("navbar","navbar-expand-lg", "sticky-top", "bg-clinica");
    navbar.innerHTML=`
    <div class="container-fluid">
          <a href="index.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="100px" height="70px">          
          </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="">ESPECIALIDADES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="">VER ESTUDIOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="">NOVEDADES</a>
                </li>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" minlength="2" maxlength="20" placeholder="Busca tu médico" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <li class="nav-item">
                  <a class="nav-link " href="">CERRAR SESION</a>
                </li>
            </div>
          </div> 
    `;
    const header=document.querySelector("header");
    header.appendChild(navbar);
}