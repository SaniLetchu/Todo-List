
let sidebarOpen = false;

document.querySelector(".menubutton").addEventListener("click", openNav);


//Opens sidebar nav
function openNav() {
    if(!sidebarOpen) {
        document.querySelector(".sidebar").style.minWidth = "max(250px, 15vw)";
        sidebarOpen = true;
    }
    else {
        closeNav();
    }
  }
  
//Closes sidebar nav
function closeNav() {
    sidebarOpen = false;
    document.querySelector(".sidebar").style.minWidth = "0";
}