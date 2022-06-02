
let sidebarOpen = false;

document.querySelector(".menubutton").addEventListener("click", openNav);


//Opens sidebar nav
function openNav() {
    if(!sidebarOpen) {
        document.querySelector(".sidebar").style.minWidth = "15vw";
        document.querySelector(".content").style.marginLeft = "15vw";
        document.querySelector(".content").style.width = "85vw";
        let items = document.querySelectorAll(".sidebaritem");
        [].forEach.call(items, function(item) {
            item.style = "display: flex";
        });
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
    document.querySelector(".content").style.marginLeft= "0";
    document.querySelector(".content").style.width = "100vw";
    let items = document.querySelectorAll(".sidebaritem");
    [].forEach.call(items, function(item) {
        item.style = "display: none";
    });
}