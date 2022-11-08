// Proteccion de Rutas:
// Mueve al index si no es un usuario
const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if(!userLogged){
    window.location.assign(window.location.origin + '/index.html')
} // Mueve al home si no es administrador
else if(!userLogged.admin){
    window.location.assign(window.location.origin + '/home.html')
}