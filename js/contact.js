const  $form =document.querySelector ('#form')
 $form. addEventListener ('submit',handleSubmit)
function handleSubmit(Event) {
    Event.preventDefault()    
}
import {createFooter, createUserNavbar, createAdminNavbar} from "./helper-functions.js";
const userLogged = JSON.parse(localStorage.getItem('userInfo'));
if(userLogged.admin){
    createAdminNavbar()
}else{
    createUserNavbar()
}
createFooter()