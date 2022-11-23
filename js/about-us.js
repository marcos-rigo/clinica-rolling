import {createFooter, createUserNavbar, createAdminNavbar} from "./helper-functions.js";
const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if(userLogged.admin){
    createAdminNavbar()
}else{
    createUserNavbar()
}
createFooter()