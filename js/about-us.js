import {createFooter, createUserNavbar, createAdminNavbar,logout} from "./helper-functions.js";
const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if(userLogged.admin){
    createAdminNavbar()
}else{
    createUserNavbar()
}
createFooter()
const logoutbtn = document.getElementById("logout")
logoutbtn.onclick=logout