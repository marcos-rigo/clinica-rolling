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

const createAdminNavbar= ()=>{
    const navbar=document.createElement("nav");
    navbar.classList.add("navbar","navbar-expand-lg", "sticky-top", "bg-clinica");
    navbar.innerHTML=`
    <div class="container-fluid">
          <a href="home.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="100px" height="70px">          
          </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="home.html">INICIO</a>
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
          <a href="home.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="100px" height="70px">          
          </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="home.html">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="home.html">ESPECIALIDADES</a>
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

// FOOTER

const createFooter= () => {
  const div = document.createElement("div")
  div.classList.add("container-fluid","text-white","p-3","bg-clinica")

  div.innerHTML=`
  <div class="mt-3 ">
            <h3 class="text-center fw-bold">CLÍNICA ROLLING</h3>
            <p class="text-center">Somos una clínica destinada a la recuperación, mantención y preservación del estado de salud de las personas. <br>
            Contamos con un equipo altamente capacitado para brindarte la mejor atención personalizada. <br>
            Atendemos Obras Sociales y consultas particulares.</p>
            <center><button class="btn btn-block btn-outline-light">Pedir un turno</button></center>
            <hr>
        </div>

        <div class="row justify-content-around text-center text-md-start">

            <div class="col-md-2 text-center">
            <a href="index.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="180px" height="160px">          
            </a>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Empresa</li>
                    <li> <a href="#" class="text-decoration-none text-white">Inicio</a> </li>
                    <li> <a href="#" class="text-decoration-none text-white"> Redes sociales</a></li>
                    <li> <a href="#" class="text-decoration-none text-white"> Marcas</a> </li>
                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Sobre nosotros</li>
                    <li> <a href="#" class="text-decoration-none text-white">Nuestros doctores</a> </li>
                    <li> <a href="#" class="text-decoration-none text-white">Creadores de la página</a> </li>

                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Soporte</li>
                    <li> <a href="#" class="text-decoration-none text-white">Contactos</a> </li>
                    <li> <a href="#" class="text-decoration-none text-white">Solicitud de soporte</a> </li>
                </ul>
            </div>
            <div class="col-md-2">
                <li class="fw-bold my-2 list-unstyled">Síguenos en nuestras redes</li>
                <ul class="list-unstyled d-flex justify-content-center justify-content-md-start">
                    <li><a href="#" class="text-white"><i class="fa-brands fa-facebook me-2 fa-1x"></i></a></li>
                    <li><a href="#" class="text-white"><i class="fa-brands fa-whatsapp mx-2 fa-1x"></i></a></li>
                    <li><a href="#" class="text-white"><i class="fa-brands fa-youtube mx-2 fa-1x"></i></a></li>
                    <li><a href="#" class="text-white"><i class="fa-brands fa-instagram mx-2 fa-1x"></i></a></li>
                    
                </ul>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12 text-center pt-2">
                <p>&copy; 2022 Copyright <a href="#" class="text-white">Clínica Rolling</a></p>
            </div>
        </div>
  `
  const footer = document.querySelector("footer")
  footer.appendChild(div)
}