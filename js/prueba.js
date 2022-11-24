import { createFooter,createAdminNavbar,logout } from "./helper-functions.js";
createFooter()
createAdminNavbar()
const logoutbtn = document.getElementById("logout")
logoutbtn.onclick=logout