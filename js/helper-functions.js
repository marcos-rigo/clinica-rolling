//Solo para exportar
//No linkear

export const createAdminNavbar= ()=>{
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
                  <a class="nav-link" href="admin-doctor.html" id="admin-active">ADMINISTRACION</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="404.html">SOPORTE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-sm btn-outline-danger" id="logout" href="">CERRAR SESION</a>
                </li>
            </div>
          </div>  
    `
    const header=document.querySelector("header");
    header.appendChild(navbar);
}
export const createUserNavbar= ()=>{
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
                  <a class="nav-link " href="404.html">SERVICIOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="404.html">VER ESTUDIOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="404.html">NOVEDADES</a>
                </li>
                <li class="nav-item">
                <div class="d-flex flex-column buscador" >
                    <label for="search"></label>
                    <input class="form-control me-2" type="search" minlength="2" maxlength="20" placeholder="Busca tu médico" data-search>
                    <div class="user-cards">
                </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link " id="logout" href="" onclick()>CERRAR SESION</a>
                </li>
            </div>
          </div> 
    `;
    const header=document.querySelector("header");
    header.appendChild(navbar);
}

// FOOTER

export const createFooter= () => {
  const div = document.createElement("div")
  div.classList.add("container-fluid","text-dark","p-3","bg-clinica")

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
                    <li> <a href="home.html" class="text-decoration-none text-dark">Inicio</a> </li>
                    <li> <a href="404.html" class="text-decoration-none text-dark"> Redes sociales</a></li>
                    <li> <a href="404.html" class="text-decoration-none text-dark"> Marcas</a> </li>
                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Sobre nosotros</li>
                    <li> <a href="home.html" class="text-decoration-none text-dark">Nuestros doctores</a> </li>
                    <li> <a href="about-us.html" class="text-decoration-none text-dark">Creadores de la página</a> </li>

                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-unstyled">
                    <li class="fw-bold my-2">Soporte</li>
                    <li> <a href="contact.html" class="text-decoration-none text-dark">Contacto</a> </li>
                    <li> <a href="404.html" class="text-decoration-none text-dark">Solicitud de soporte</a> </li>
                </ul>
            </div>
            <div class="col-md-2">
                <li class="fw-bold my-2 list-unstyled">Síguenos en nuestras redes</li>
                <ul class="list-unstyled d-flex justify-content-center justify-content-md-start">
                    <li><a href="https://www.facebook.com/RollingCodeSchool" target="_blank" class="text-dark"><i class="fa-brands fa-facebook me-2 fa-1x"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/rollingcode/" target="_blank"class="text-dark"><i class="fa-brands fa-linkedin-in mx-2 fa-1x"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCqqU2Ztlv_QKGPXRW9LrR9w/featured" target="_blank" class="text-dark"><i class="fa-brands fa-youtube mx-2 fa-1x"></i></a></li>
                    <li><a href="https://www.instagram.com/rollingcodeschool/" target="_blank" class="text-dark"><i class="fa-brands fa-instagram mx-2 fa-1x"></i></a></li>
                    
                </ul>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12 text-center pt-2">
                <p>&copy; 2022 Copyright <a href="#" class="text-dark">Clínica Rolling</a> | 9 de Julio 279 CP:4000 - San Miguel de Tucumán, Tucumán, Argentina | Call Center: +54 (0381) 4502600	</p>
            </div>
        </div>
  `
  const footer = document.querySelector("footer")
  footer.appendChild(div)
}

export const logout = ()=>{
  localStorage.removeItem('userInfo');
  window.location.assign(window.location.origin + '/index.html')
}
