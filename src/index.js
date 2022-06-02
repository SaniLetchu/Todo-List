
let sidebarOpen = false;
let innersidebarOpenProject = false;
let innersidebarOpenNotes = false;

document.querySelector(".menubutton").addEventListener("click", openNav);
document.querySelector(".projectbutton").addEventListener("click", function(){ openInnerNavProject(".projects");});
document.querySelector(".notesbutton").addEventListener("click", function(){ openInnerNavNotes(".notes");});


//Opens sidebar nav
function openNav() {
    if(!sidebarOpen) {
        document.querySelector(".sidebar").style.maxWidth = "15vw";
        //document.querySelector(".content").style.marginLeft = "15vw";
        document.querySelector(".content").style.maxWidth = "85vw";
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
    document.querySelector(".sidebar").style.maxWidth = "0";
    //document.querySelector(".content").style.marginLeft= "0";
    document.querySelector(".content").style.maxWidth = "100vw";
    let items = document.querySelectorAll(".sidebaritem");
    [].forEach.call(items, function(item) {
        item.style = "display: none";
    });
}

//Open innersidebar
function openInnerNavProject(name) {
    if(!innersidebarOpenProject) {
        document.querySelector(name).style.height = "250px";
        innersidebarOpenProject = true;
    }
    else {
        closeInnerNavProject(name)
    }
}

//Close innersidebar
function closeInnerNavProject(name) {
    innersidebarOpenProject = false;
    document.querySelector(name).style.height = "0";
}

//Open innersidebar
function openInnerNavNotes(name) {
    if(!innersidebarOpenNotes) {
        document.querySelector(name).style.height = "250px";
        innersidebarOpenNotes = true;
    }
    else {
        closeInnerNavNotes(name)
    }
}

//Close innersidebar
function closeInnerNavNotes(name) {
    innersidebarOpenNotes = false;
    document.querySelector(name).style.height = "0";
}