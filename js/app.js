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

