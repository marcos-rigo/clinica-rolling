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
  div.classList.add("container-fluid","text-dark","p-3","bg-clinica", "position-absolute", "bottom-0")

  div.innerHTML=`
  

        <div class="row justify-content-around text-center text-md-start">

            <div class="col-md-2 text-center">
            <a href="index.html">
            <img src="assets/CLíNICA rolling navbar.png" alt="CLINICA ROLLING"  class="" width="180px" height="160px">          
            </a>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Empresa</li>
                    <li> <a href="#" class="text-decoration-none text-dark">Inicio</a> </li>
                    <li> <a href="#" class="text-decoration-none text-dark"> Redes sociales</a></li>
                    <li> <a href="#" class="text-decoration-none text-dark"> Marcas</a> </li>
                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Sobre nosotros</li>
                    <li> <a href="#" class="text-decoration-none text-dark">Nuestros doctores</a> </li>
                    <li> <a href="#" class="text-decoration-none text-dark">Creadores de la página</a> </li>

                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Soporte</li>
                    <li> <a href="#" class="text-decoration-none text-dark">Contactos</a> </li>
                    <li> <a href="#" class="text-decoration-none text-dark">Solicitud de soporte</a> </li>
                </ul>
            </div>
            <div class="col-md-2">
                <li class="fw-bold my-2 list-unstyled">Síguenos en nuestras redes</li>
                <ul class="list-unstyled d-flex justify-content-center justify-content-md-start">
                    <li><a href="#" class="text-dark"><i class="fa-brands fa-facebook me-2 fa-1x"></i></a></li>
                    <li><a href="#" class="text-dark"><i class="fa-brands fa-whatsapp mx-2 fa-1x"></i></a></li>
                    <li><a href="#" class="text-dark"><i class="fa-brands fa-youtube mx-2 fa-1x"></i></a></li>
                    <li><a href="#" class="text-dark"><i class="fa-brands fa-instagram mx-2 fa-1x"></i></a></li>
                    
                </ul>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12 text-center pt-2">
                <p>&copy; 2022 Copyright <a href="#" class="text-dark">Clínica Rolling</a></p>
            </div>
        </div>
  `
  const footer = document.querySelector("footer")
  footer.appendChild(div)
}

//Creando base de datos de medicos

class Doctor{
  constructor(id,name, especialidad, descripcion, pares, imagen){
  this.id = id
  this.name = name
  this.especialidad = especialidad
  this.descripcion = descripcion
  this.pares= pares
  this.imagen= imagen
  }
}


let doctors; 
if(localStorage.getItem('doctors')){
    doctors= JSON.parse(localStorage.getItem('doctors'))
}else{
    doctors= [
    new Doctor(1,'Valentin E. Galarga','Traumatologia',`Especialista en Traumatología Deportiva

    CLINICAL FELLOW IN SPORTS MEDICINE, Cleveland Clinic Foundation (1993-1994) USA.
    
    RESEARCH FELLOW IN ORTHOPEDIC SURGERY, Case Western Reserve University, Cleveland, USA(1992-1993).
    
    RESIDENCIA (Mayo 1985 – Mayo 1989).
    
    JEFE DE RESIDENTES (Mayo 1989-Mayo 1990) Programa de Cirugía Ortopédica –  Hospital Italiano de Buenos Aires, Argentina.
    
    UNIVERSIDAD DE BUENOS AIRES – FACULTAD DE MEDICINA (1979 – 1984) Buenos Aires, Argentina Título obtenido: Médico.
     
    DIRECTOR MÉDICO: Club De Amigos Sport Medicine Center (1996 - 2007) Buenos Aires, Argentina.
    
    MÉDICO DEL PLANTEL RACING CLUB (fútbol primera división 2001-2005), Buenos Aires, Argentina.
    
    MÉDICO DEL EQUIPO ARGENTINO DE COPA DAVIS (2006 - 2014).
    
    MÉDICO DEL EQUIPO DE VOLLEY, CLUB DE AMIGOS VOLLEYBALL (1996-presente).
    
    ASISTENTE MÉDICO DE CLEVELAND CAVALIERS NBA, CLEVELAND INDIANS MLB Y CLEVELAND BROWNS NFL (1992 - 1995).`,true, "assets/doctor-valentin-image.png"),
    new Doctor(2,'Luis Espeche','Kinesiologia',`Egresado de la Universidad de Buenos Aires (UBA) en el año 1994, con el tíulo de Licenciado 
    Kinesiólogo Fisiatra, formándose en diferentes técnicas de rehabilitación, y especializándose 
    en  rehabilitación traumatológica y deportiva.
    
    Desde hace más de 20 años integra equipos multidisciplinarios conjuntamente con Deportólogos, 
    Traumatólogos y Cirujanos Ortopédicos, realizando abordajes kinésicos en pacientes sometidos a 
    cirugías ligamentarias, reemplazos articulares (prótesis), así como en deportistas en recuperación 
    de lesiones.
    
    Fue integrante del cuerpo médico del Querétaro Futbol Club (México), y actúa como consultor en el área
     de rehabilitación para instituciones, equipos de entrenamiento y diferentes academias de Tenis.
    
    Es Docente Universitario, comenzando en el año 1992 dentro de la Cátedra de Biomecánica y Anatomía Funcional,
     incorporándose luego a las áreas de Semiología y patología, y Terápéutica en el Deporte, siendo hoy Profesor 
    Asociado en las Cátedras Semiopatología II y Kinefisiatría en Traumatología, de la Universidad Abierta Interamericana.
    
    Docente de las Especialidades en Kinesiología Deportiva de la Universidad de Buenos Aires, y de la Diplomatura en 
    Kinesiología Deportiva, Universidad Abierta Interamericana.
    `,true, ),
    new Doctor(3,'Ignacio Talarga','Cardiologia','MÉDICO EGRESADO DE LA UBA, CON TITULO DE ESPECIALISTA EN MEDICINA DEL DEPORTE, CARDIOLOGÍA Y OZONOTERAPEUTA POST GRADO UBA    EX MEDICO RESIDENTE DE LA FUNDACION DR, RENÉ FAVALORO.    EX MEDICO DEL SERVICIO DE CARDIOLOGIA HTAL. ARGERICH . JEFE. DR CARLOS BERTOLASI.    EX MEDICO DEL SERVICIO CARDIOLOGÍA HOSPITAL BERNARDINO RIVADAVIA.    DOCENTE CURSO SUPERIOR DE CARDIOLOGÍA COLEGIO MEDICO III MORÓN.    EX DOCENTE CURSO DE ESPECIALISTA MEDICINA DEPORTE GRAL SAN MARTÍN.', false, ),
    new Doctor(4,'Maria D. Fuertes','Nutricion',`Lic. en Nutricion (UBA) - MN 4394.
    Especialista en Metodología de la Investigación Científica (UNLA).
    Especialista en Estadistica Aplicada a Cs. de la Salud (UBA - FCEyN).
    Antropometrista Instructor Nivel ISAK 3.
    Directora Carrera de la Lic. en Nutrición de la Universidad de Morón.
    Nutricionista de la Seleccion Mayor Masculina de Futbol Argentino (AFA).
    Nutricionista de la Confederación Argentina de Hockey (CAH).
    Nutricionista de la Confederación Argentina de Básquet (CABB).
    Nutricionista de la Confederacion Argentina de Voley (FEVA).
    Nutricionista del Área de Ciencias del Deporte de la Asociación Argentina de Tenis (AAT).
    Nutricionista del Plantel de 1º División del Club Atlético Huracán.
    `,false, ),
    new Doctor(5,'Micaela Bezona','Kinesiologia',`- UST, Magister en Ciencias de la Actividad Física y Deporte, mención Rehabilitación y
    Entrenamiento Deportivo, 2016-2018.
    - Fundación COORED, Diplomado Internacional de Biomecánica aplicada al Deporte,
    mayo octubre de 2020.
    - UST, Diploma en Metodología de la Investigación, 8 de octubre al 2 de julio de 2020.
    - UST, Diploma en Biomecánica y Lesiones Músculo-Esqueléticas Asociadas a la
    Actividad Física y el Deporte, 2016.
    - IACC, Diplomada en Prevención de Riesgos, Gestión en Seguridad y Salud
    Ocupacional, 31 de mayo de 2016 al 17 de octubre de 2016.
    - Universidad de Concepción, Diplomado en Ergonomía, 2013-2014.
    - UST, Diplomada en Formación Pedagógica para la Educación Superior, 2011.
    - Universidad Isabel I, Experto Universitario en Prevención y Readaptación FísicoDeportiva, 2018.
    `,true, ),
    ]
    localStorage.setItem('doctors',JSON.stringify(doctors))
}