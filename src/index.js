//Import other scripts
import {toDoObject, toDoLibrary, noteObject, projectObject} from './To_do_object';
import { compareAsc, format, isSameDay, parseISO, add} from 'date-fns'
import {todoCreate} from './content';
import {formDiv} from './form';

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
        let projectstab = document.querySelector(".projects");
        let notestab = document.querySelector(".notes");
        projectstab.style.display = "block";
        notestab.style.display = "block";
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
    let projectstab = document.querySelector(".projects");
    let notestab = document.querySelector(".notes");
    projectstab.style.display = "none";
    notestab.style.display = "none";
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
    divcontent.replaceWith(content);
    divcontent = content;
}

let modalcontent = document.querySelector(".modal-content");
let modalwindow = document.querySelector(".modal");

//Create content in the modal-content div
function createModalContent(content) {
    modalcontent.replaceWith(content);
    modalcontent = content;
    modalwindow.style.display = "block";
}

function closeModal() {
    modalwindow.style.display = "none";
}


//Check local storage for information
(function checkLocaleStorage() {

    //localStorage.clear();

    //First time entering website So lets initialize some dummy content
    if(localStorage.length == 0) {
        //Bulletproof method to not initialize dummy content again even if user deletes everything
        localStorage.setItem(-1, "Already visited site :). Not my fault you deleted everything");
        //Put dummy content here

        //Create different dates
        const today = new Date();
        const tomorrow = new Date();
        const threedays = new Date();
        const fourdays = new Date();
        const fivedays = new Date();
        const sevendays = new Date();
        const eightdays = new Date();
        const yesterday = new Date();
        tomorrow.setDate(today.getDate() + 1);
        threedays.setDate(today.getDate() + 3);
        fourdays.setDate(today.getDate() + 4);
        fivedays.setDate(today.getDate() + 5);
        sevendays.setDate(today.getDate() + 7);
        eightdays.setDate(today.getDate() + 8);
        yesterday.setDate(today.getDate() - 1);
        
        toDoLibrary.append(new toDoObject("Learn React", "Open Odin Project", today, "red"));
        toDoLibrary.update("0", "Learn React", "Open Odin Project", today, "red", true);

        toDoLibrary.append(new toDoObject("Eat healthy", "Apple, Carrot", tomorrow, "yellow"));

        toDoLibrary.append(new toDoObject("Watch football", "With friends", threedays, "green"));

        toDoLibrary.append(new toDoObject("Code more", "CODE MORE!!!", yesterday, "red"));

        toDoLibrary.append(new toDoObject("Road trip", "To Mexico!", eightdays, "yellow"));

        toDoLibrary.append(new toDoObject("Dress up for the event", "Maybe that black suit", yesterday, "yellow"));
        toDoLibrary.update("5", "Dress up for the event", "Maybe that black suit", yesterday, "yellow", true);

        toDoLibrary.append(new toDoObject("Date", "Dress up!", sevendays, "red"));
        toDoLibrary.appendNote(new noteObject("Gym routine", "Bench press: 60kg x 3, Deadlift: 100kg x 3 ..."));
        toDoLibrary.appendProject(new projectObject("Game Project"));
        toDoLibrary.append(new toDoObject("Start the project", "Get coding environment working", yesterday, "yellow", "Game Project"));
        toDoLibrary.update("7", "Start the project", "Get coding environment working", yesterday, "yellow", true);
        toDoLibrary.append(new toDoObject("Make art", "Likely some pixel art", tomorrow, "red", "Game Project"));
        toDoLibrary.append(new toDoObject("Map builder", "Very simple map builder and save to JSON format", eightdays, "green", "Game Project"));
        toDoLibrary.append(new toDoObject("Watch TV", "Star wars", today, "green"));


        //Coding project


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
    const completedlist = completedThem();
    for(let key in list) {
        let value = list[key];
        if((compareAsc(new Date(), parseISO(value.dueDate)) == -1 || isSameDay(new Date(), parseISO(value.dueDate))) || completedlist[key] == value) {
            delete list[key];
        }
    }
    return list;
}

//Returns todos that have dueDate today
function samedayThem() {
    const list = {...toDoLibrary.list};
    const completedlist = completedThem();
    for(let key in list) {
        let value = list[key];
        if(!isSameDay(new Date(), parseISO(value.dueDate)) || completedlist[key] == value) {
            delete list[key];
        }
    }
    return list;
}

//Return todos that are due in the following next 7 days
function weekThem() {
    const list = {...toDoLibrary.list};
    const completedlist = completedThem();
    for(let key in list) {
        let value = list[key];
        if((compareAsc(new Date(), parseISO(value.dueDate)) == 1 || compareAsc(add(new Date(), {weeks: 1,}), parseISO(value.dueDate)) == -1) || completedlist[key] == value || isSameDay(new Date(), parseISO(value.dueDate))) {
            delete list[key];
        }
    }
    return list;
}

//Return list of projects
function findProjects() {
    const list = {...toDoLibrary.projects};
    return list;
}

//Return list of notes
function findNotes() {
    const list = {...toDoLibrary.notes};
    return list;
}

//Return todos that are part of a project
function projectThem() {
    const list = {...toDoLibrary.list};
    for(let key in list) {
        let value = list[key];
        if(value.project != updateTitle) {
            delete list[key];
        }
    }
    return list;
}

function returnempty() {
    return {};
}

let noteorprojectkey = null;
//Creates project tabs to sidebar menu
function createSidebarProjects() {
    const list = findProjects();
    const projectdiv = document.querySelector(".projects");
    //Delete previous
    while(projectdiv.firstChild) {
        projectdiv.removeChild(projectdiv.lastChild);
    }
    const ul = document.createElement("ul");
    for(let key in list) {
        let value = list[key];
        let li = document.createElement("li");
        li.classList.add("sidebarbutton");
        li.classList.add("sidebaritem");
        li.classList.add("innersidebar");
        let name = document.createElement("p");
        name.classList.add("sidebaritem");
        name.classList.add("innersidebartext");
        name.textContent = value.title;
        li.appendChild(name);
        li.addEventListener("click", function(){
            updateTitle = value.title;
            updatefunction = projectThem;
            noteorprojectkey = key;
            createContent(todoCreate(value.title, projectThem));
        });
        ul.appendChild(li);
    }
    projectdiv.appendChild(ul);

}


//Creates project tabs to sidebar menu
function createSidebarNotes() {
    const notelist = findNotes();
    const projectdiv = document.querySelector(".notes");
    //Delete previous
    while(projectdiv.firstChild) {
        projectdiv.removeChild(projectdiv.lastChild);
    }
    const ul = document.createElement("ul");
    for(let key in notelist) {
        let value = notelist[key];
        let li = document.createElement("li");
        li.classList.add("sidebarbutton");
        li.classList.add("sidebaritem");
        li.classList.add("innersidebar");
        let name = document.createElement("p");
        name.classList.add("sidebaritem");
        name.classList.add("innersidebartext");
        name.textContent = value.title;
        li.appendChild(name);
        li.addEventListener("click", function(){
            updateTitle = value.title;
            updatefunction = returnempty;
            noteorprojectkey = key;
            createContent(todoCreate(value.title, returnempty));
        });
        ul.appendChild(li);
    }
    projectdiv.appendChild(ul);

}

createSidebarNotes();

createSidebarProjects();

//Event listener for plusbutton
document.querySelector(".plussign").addEventListener("click", function(){
    createModalContent(formDiv());
});

let updateTitle = null;
let updatefunction = null;

//Updates the content when called upon
function updatePage() {
    createContent(todoCreate(updateTitle, updatefunction));
    createSidebarProjects();
    createSidebarNotes();
}

//Load Home tab as default
function defaultPage() {
    noteorprojectkey = null;
    createContent(todoCreate("TO-DO", allOfThem));
    updateTitle = "TO-DO";
    updatefunction = allOfThem;
}
defaultPage();

//Eventlisteners for sidebar buttons
document.querySelector(".homebutton").addEventListener("click", function() {
    noteorprojectkey = null;
    createContent(todoCreate("TO-DO", allOfThem));
    updateTitle = "TO-DO";
    updatefunction = allOfThem;
});

document.querySelector(".completedbutton").addEventListener("click", function() {
    noteorprojectkey = null;
    createContent(todoCreate("Completed", completedThem));
    updateTitle = "Completed";
    updatefunction = completedThem;
});

document.querySelector(".overduebutton").addEventListener("click", function() {
    noteorprojectkey = null;
    createContent(todoCreate("Overdue", overdueThem));
    updateTitle = "Overdue";
    updatefunction = overdueThem;
});

document.querySelector(".todaybutton").addEventListener("click", function() {
    noteorprojectkey = null;
    createContent(todoCreate("Today", samedayThem));
    updateTitle = "Today";
    updatefunction = samedayThem;
});

document.querySelector(".weekbutton").addEventListener("click", function() {
    noteorprojectkey = null;
    createContent(todoCreate("In a Week", weekThem));
    updateTitle = "In a Week";
    updatefunction = weekThem;
});











export {createContent, createModalContent, closeModal, findProjects, updatePage, defaultPage, noteorprojectkey};