import {createFooter} from "./helper-functions.js";
createFooter()
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
    new User(5,'Martin Fanlo',33,'martin@gmail.com','123456',true),
    new User(6,'Valentin Quiroga',27,'valentin@gmail.com','123456',false),
    ]
    localStorage.setItem('users',JSON.stringify(users))
}

//Constructor de Doctores

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
//Setteando base de datos de medicos
let doctors; 
if(localStorage.getItem('doctors')){
    doctors= JSON.parse(localStorage.getItem('doctors'))
}else{
    doctors= [
    new Doctor(1,'Valentin E. Galarga','Traumatologia',`<ul>
    <li>Especialista en Traumatología Deportiva</li>
    <li> CLINICAL FELLOW IN SPORTS MEDICINE, Cleveland Clinic Foundation (1993-1994) USA.  </li>
    <li>RESEARCH FELLOW IN ORTHOPEDIC SURGERY, Case Western Reserve University, Cleveland, USA(1992-1993).</li>
    <li> RESIDENCIA (Mayo 1985 – Mayo 1989)</li>  
    <li> JEFE DE RESIDENTES (Mayo 1989-Mayo 1990) Programa de Cirugía Ortopédica –  Hospital Italiano de Buenos Aires, Argentina.  </li> 
    <li>   UNIVERSIDAD DE BUENOS AIRES – FACULTAD DE MEDICINA (1979 – 1984) Buenos Aires, Argentina Título obtenido: Médico.</li>         
    <li>  DIRECTOR MÉDICO: Club De Amigos Sport Medicine Center (1996 - 2007) Buenos Aires, Argentina.</li>
    <li>  MÉDICO DEL PLANTEL RACING CLUB (fútbol primera división 2001-2005), Buenos Aires, Argentina.</li> 
    <li>  MÉDICO DEL EQUIPO ARGENTINO DE COPA DAVIS (2006 - 2014). </li> 
    <li>   MÉDICO DEL EQUIPO DE VOLLEY, CLUB DE AMIGOS VOLLEYBALL (1996-presente).</li>
    <li>   ASISTENTE MÉDICO DE CLEVELAND CAVALIERS NBA, CLEVELAND INDIANS MLB Y CLEVELAND BROWNS NFL (1992 - 1995).</li>
    </ul>`, 'Aguilares',"assets/doctor-valentin-image.png", '3875666444', '4444', '15', '5', true),
    new Doctor(2,'Luis Espeche','Kinesiologia',`<ul>
    <li>Egresado de la Universidad de Buenos Aires (UBA) en el año 1994, con el tíulo de Licenciado Kinesiólogo Fisiatra, formándose en diferentes técnicas de rehabilitación, y especializándose en  rehabilitación traumatológica y deportiva.</li>
    <li>  Desde hace más de 20 años integra equipos multidisciplinarios conjuntamente con Deportólogos, Traumatólogos y Cirujanos Ortopédicos, realizando abordajes kinésicos en pacientes sometidos a cirugías ligamentarias, reemplazos articulares (prótesis), así como en deportistas en recuperación de lesiones. </li>    
    <li> Fue integrante del cuerpo médico del Querétaro Futbol Club (México), y actúa como consultor en el área  de rehabilitación para instituciones, equipos de entrenamiento y diferentes academias de Tenis. </li>    
    <li> Es Docente Universitario, comenzando en el año 1992 dentro de la Cátedra de Biomecánica y Anatomía Funcional, incorporándose luego a las áreas de Semiología y patología, y Terápéutica en el Deporte, siendo hoy Profesor Asociado en las Cátedras Semiopatología II y Kinefisiatría en Traumatología, de la Universidad Abierta Interamericana. </li>
    <li>Docente de las Especialidades en Kinesiología Deportiva de la Universidad de Buenos Aires, y de la Diplomatura en  Kinesiología Deportiva, Universidad Abierta Interamericana. </li>
    </ul>
    `,'San Miguel de Tucumán',"assets/doctor-luisespeche-image.png", '3815666444','7777', '15', '3', true),
    new Doctor(3,'Ignacio Talarga','Cardiologia',`<ul>
    <li>MÉDICO EGRESADO DE LA UBA, CON TITULO DE ESPECIALISTA EN MEDICINA DEL DEPORTE, CARDIOLOGÍA Y OZONOTERAPEUTA</li>
    <li> EX MEDICO RESIDENTE DE LA FUNDACION DR, RENÉ FAVALORO.</li>
    <li>  EX MEDICO DEL SERVICIO DE CARDIOLOGIA HTAL. ARGERICH . JEFE. DR CARLOS BERTOLASI.</li>
    <li>  EX MEDICO DEL SERVICIO CARDIOLOGÍA HOSPITAL BERNARDINO RIVADAVIA. </li>  
    <li> DOCENTE CURSO SUPERIOR DE CARDIOLOGÍA COLEGIO MEDICO III MORÓN.</li>
    <li> EX DOCENTE CURSO DE ESPECIALISTA MEDICINA DEPORTE GRAL SAN MARTÍN.</li>
    <li>LE HACE LA MUJER AL QUE LEA ESTO</li>
    </ul>`,'Aguilares',"assets/doctor-talarga-image.png", '3875666444','1234', '15', '5', true),
    new Doctor(4,'Maria D. Fuertes','Nutricion',`<ul>
    <li>Lic. en Nutricion (UBA) </li>
      <li> Especialista en Metodología de la Investigación Científica (UNLA).</li>
       <li> Especialista en Estadistica Aplicada a Cs. de la Salud (UBA - FCEyN).</li>
       <li> Antropometrista Instructor Nivel ISAK 3.</li>
      <li>  Directora Carrera de la Lic. en Nutrición de la Universidad de Morón.</li>
     <li>   Nutricionista de la Seleccion Mayor Masculina de Futbol Argentino (AFAno).</li>
       <li> Nutricionista de la Confederación Argentina de Hockey (CAH).</li>
        <li>Nutricionista de la Confederación Argentina de Básquet (CABB).</li>
       <li>Nutricionista de la Confederacion Argentina de Voley (FEVA).</li>
    <li>Nutricionista del Área de Ciencias del Deporte de la Asociación Argentina de Tenis (AAT).</li>
     <li>   Nutricionista del Plantel de 1º División del Club Atlético Huracán.</li>
    </ul>
    `,'Aguilares',"assets/doctora-mariafuertes-image.png", '3875666444','6666', '15', '5', true),
    new Doctor(5,'Micaela Bezona','Kinesiologia',`<ul>
    <li> UST, Magister en Ciencias de la Actividad Física y Deporte, mención Rehabilitación y Entrenamiento Deportivo, 2016-2018.</li>
    <li> Fundación COORED, Diplomado Internacional de Biomecánica aplicada al Deporte, mayo octubre de 2020.</li>
    <li>UST, Diploma en Metodología de la Investigación, 8 de octubre al 2 de julio de 2020.</li>
    <li>UST, Diploma en Biomecánica y Lesiones Músculo-Esqueléticas Asociadas a la Actividad Física y el Deporte, 2016.</li>
    <li>IACC, Diplomada en Prevención de Riesgos, Gestión en Seguridad y Salud Ocupacional, 31 de mayo de 2016 al 17 de octubre de 2016.</li>
    <li> Universidad de Concepción, Diplomado en Ergonomía, 2013-2014.</li>
    <li>UST, Diplomada en Formación Pedagógica para la Educación Superior, 2011.</li>
    <li> Universidad Isabel I, Experto Universitario en Prevención y Readaptación FísicoDeportiva, 2018.</li>
    </ul>
    `,'Aguilares',"assets/doctora-bezona-image.png", '3875666444','2222', '15', '5', true),
    ]
    localStorage.setItem('doctors',JSON.stringify(doctors))
}
