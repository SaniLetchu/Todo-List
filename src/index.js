//Import other scripts
import {toDoObject, toDoLibrary} from './To_do_object';
import { compareAsc, format, isSameDay, parseISO, differenceInWeeks} from 'date-fns'
import todoCreate from './content';

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

let divcontent = document.querySelector(".todocontent");

//Creates the content in the .content div
function createContent(content) {
    divcontent.replaceWith(content)
    divcontent = content;
}


//Check local storage for information
(function checkLocaleStorage() {

    //First time entering website So lets initialize some dummy content
    if(localStorage.length == 0) {
        //Bulletproof method to not initialize dummy content again even if user deletes everything
        localStorage.setItem(-1, "Already visited site :). Not my fault you deleted everything");
        //Put dummy content here

    }
    else {
        toDoLibrary.download();
    }
})();

//Returns all of todos
function allOfThem() {
    return {...toDoLibrary.list};
}

//Return todos that are just completed
function completedThem() {
    const list = {...toDoLibrary.list};
    for(let key in list) {
        let value = list[key];
        if(!value.completed) {
            delete list[key];
        }
    }
    return list;
}

//Return overdue todos 
function overdueThem() {
    const list = {...toDoLibrary.list};
    for(let key in list) {
        let value = list[key];
        if(compareAsc(new Date(), parseISO(value.dueDate)) == -1) {
            delete list[key];
        }
    }
    return list;
}

//Returns todos that have dueDate today
function samedayThem() {
    const list = {...toDoLibrary.list};
    for(let key in list) {
        let value = list[key];
        if(!isSameDay(new Date(), parseISO(value.dueDate))) {
            delete list[key];
        }
    }
    return list;
}

//Return todos that are due in the following next 7 days
function weekThem() {
    const list = {...toDoLibrary.list};
    for(let key in list) {
        let value = list[key];
        if(compareAsc(new Date(), parseISO(value.dueDate)) == 1 || differenceInWeeks(new Date(), parseISO(value.dueDate)) != 1) {
            delete list[key];
        }
    }
    return list;
}


//Load Home tab as default
createContent(todoCreate("Home of To-Dos", allOfThem));

//Eventlisteners for sidebar buttons
document.querySelector(".homebutton").addEventListener("click", function() {
    createContent(todoCreate("Home of To-Dos", allOfThem));
});

document.querySelector(".completedbutton").addEventListener("click", function() {
    createContent(todoCreate("Completed", completedThem));
});

document.querySelector(".overduebutton").addEventListener("click", function() {
    createContent(todoCreate("Overdue", overdueThem));
});

document.querySelector(".todaybutton").addEventListener("click", function() {
    createContent(todoCreate("Today", samedayThem));
});

document.querySelector(".weekbutton").addEventListener("click", function() {
    createContent(todoCreate("Week", weekThem));
});











export {createContent};