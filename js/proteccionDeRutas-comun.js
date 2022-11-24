// Proteccion de Rutas:
// Mueve al index si no es un usuario
const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if(!userLogged){
    window.location.assign(window.location.origin + '/index.html')
} 