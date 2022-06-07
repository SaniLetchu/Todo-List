import {createContent, createModalContent, closeModal, findProjects, updatePage} from './index';
import {toDoLibrary, toDoObject, noteObject, projectObject} from "./To_do_object";

let currentform = null;  

function formDiv() {
    let formdiv = document.createElement("div");
    formdiv.classList.add("modal-content");
    formdiv.classList.add("form");
    let sidebar = document.createElement("div");
    sidebar.classList.add("formsidebar");
    formdiv.appendChild(sidebar);
    let header = document.createElement("div");
    header.classList.add("formheader");
    formdiv.appendChild(header);
    let formcontent = document.createElement("div");
    formcontent.classList.add("formcontent");
    formdiv.appendChild(formcontent);

    function createFormContent(content) {
        formcontent.replaceWith(content);
        formcontent = content;
    }

    //Header stuff
    let heading = document.createElement("h2");
    heading.textContent = "Create...";
    heading.style.color = "white";
    header.appendChild(heading);
    let closeform = document.createElement("img");
    closeform.setAttribute("src", "x.svg");
    closeform.classList.add("formclose");
    closeform.addEventListener("click", function(){
        closeModal();
    });
    header.appendChild(closeform);

    //Sidebar stuff
    let ul = document.createElement("ul");
    ul.classList.add("formul")
    let todo = document.createElement("li");
    todo.addEventListener("click", function(){
        createFormContent(createForm());
    });
    todo.classList.add("sidebarbutton1");
    todo.classList.add("sidebaritem1");
    let projects = document.createElement("li");
    projects.addEventListener("click", function(){
        createFormContent(createProject());
    });
    projects.classList.add("sidebarbutton1");
    projects.classList.add("sidebaritem1");
    let notes = document.createElement("li");
    notes.addEventListener("click", function(){
        createFormContent(createNote());
    });
    notes.classList.add("sidebarbutton1");
    notes.classList.add("sidebaritem1");
    let todoicon = document.createElement("img");
    todoicon.classList.add("sidebaritem1");
    todoicon.classList.add("sidebaricon1");
    let todotext = document.createElement("p");
    todotext.classList.add("sidebaritem1");
    todotext.classList.add("sidebartext");
    let projectsicon = document.createElement("img");
    projectsicon.classList.add("sidebaritem1");
    projectsicon.classList.add("sidebaricon1");
    let projectstext = document.createElement("p");
    projectstext.classList.add("sidebaritem1");
    projectstext.classList.add("sidebartext");
    let notesicon = document.createElement("img");
    notesicon.classList.add("sidebaritem1");
    notesicon.classList.add("sidebaricon1");
    let notestext = document.createElement("p");
    notestext.classList.add("sidebaritem1");
    notestext.classList.add("sidebartext");
    todoicon.setAttribute("src", "task.svg");
    projectsicon.setAttribute("src", "project.svg");
    notesicon.setAttribute("src", "notes.svg");
    todotext.textContent = "To-do";
    projectstext.textContent = "Project";
    notestext.textContent = "Note";

    todo.appendChild(todoicon);
    todo.appendChild(todotext);
    projects.appendChild(projectsicon);
    projects.appendChild(projectstext);
    notes.appendChild(notesicon);
    notes.appendChild(notestext);
    ul.appendChild(todo);
    ul.appendChild(projects);
    ul.appendChild(notes);
    sidebar.appendChild(ul);
    if(currentform == null) {
        createFormContent(createForm());
    }
    else if(currentform = "todo") {
        createFormContent(createForm());
    }
    else if(currentform = "project") {
        createFormContent(createProject());
    }
    else if(currentform = "notes")  {
        createFormContent(createNote());
    }


    return formdiv;
}

//Create todoform to formcontent div
function createForm() {
    currentform = "todo";
    let div = document.createElement("div");
    div.classList.add("formcontent");
    let form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "return false");
    form.classList.add("todoformcontent")
    div.appendChild(form);

    //Title
    let titleinput = document.createElement("textarea");
    titleinput.required = true;
    titleinput.setAttribute("placeholder", "Title: Pay bills");
    form.appendChild(titleinput);

    //Description
    let description = document.createElement("textarea");
    description.required = true;
    form.appendChild(description);
    description.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    description.classList.add("descriptionform");

    //Project select
    let selectlabel = document.createElement("label");
    selectlabel.setAttribute("for", "selectproject");
    selectlabel.textContent = "Project: (optional)"
    form.appendChild(selectlabel);
    let selectproject = document.createElement("select");
    selectproject.setAttribute("id", "selectproject");
    selectproject.classList.add("selectform");
    form.appendChild(selectproject);

    let optionempty = document.createElement("option");
    optionempty.setAttribute("value", "");
    optionempty.textContent = "";
    selectproject.appendChild(optionempty);

    const list = findProjects();
    for(let key in list) {
        let value = list[key];
        let projectname = value.title;
        let option = document.createElement("option");
        option.setAttribute("value", projectname);
        option.textContent = projectname;
        selectproject.appendChild(option);
    }

    //Date select
    let datelabel = document.createElement("label");
    datelabel.setAttribute("for", "selectdate");
    datelabel.textContent = "Due Date:"
    form.appendChild(datelabel);
    let selectdate = document.createElement("input");
    selectdate.required = true;
    selectdate.setAttribute("id", "selectdate");
    selectdate.setAttribute("type", "date");
    selectdate.classList.add("selectdate");
    form.appendChild(selectdate);

    //Priority
    let prioritylabel = document.createElement("label");
    prioritylabel.setAttribute("for", "selectpriority");
    prioritylabel.textContent = "Priority:"
    form.appendChild(prioritylabel);
    //Low
    let divlow = document.createElement("div");
    divlow.classList.add("divlow")
    let low = document.createElement("input");
    low.required = true;
    low.setAttribute("type", "radio");
    low.setAttribute("value", "green");
    low.setAttribute("name", "priority");
    low.setAttribute("id", "low");
    divlow.appendChild(low);
    let lowlable = document.createElement("label");
    lowlable.classList.add("radiotext");
    lowlable.textContent = "Low";
    lowlable.setAttribute("for", "low");
    divlow.appendChild(lowlable);
    form.appendChild(divlow)

    //Medium
    let divmedium = document.createElement("div");
    let medium = document.createElement("input");
    divmedium.classList.add("divmedium")
    medium.setAttribute("type", "radio");
    medium.setAttribute("value", "yellow");
    medium.setAttribute("name", "priority");
    medium.setAttribute("id", "medium");
    divmedium.appendChild(medium);
    let mediumlable = document.createElement("label");
    mediumlable.classList.add("radiotext");
    mediumlable.textContent = "Medium";
    mediumlable.setAttribute("for", "medium");
    divmedium.appendChild(mediumlable);
    form.appendChild(divmedium)

    //High
    let divhigh = document.createElement("div");
    divhigh.classList.add("divhigh");
    let high = document.createElement("input");
    high.setAttribute("type", "radio");
    high.setAttribute("value", "red");
    high.setAttribute("name", "priority");
    high.setAttribute("id", "high");
    divhigh.appendChild(high);
    let highlable = document.createElement("label");
    highlable.classList.add("radiotext");
    highlable.textContent = "High";
    highlable.setAttribute("for", "high");
    divhigh.appendChild(highlable);
    form.appendChild(divhigh)

    let button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.classList.add("submitbutton")
    button.setAttribute("value", "Create new To-do");
    form.appendChild(button);

    //Event listener when submit happens
    form.addEventListener("submit", function(){
        let titlevalue = titleinput.value;
        let descriptionvalue = description.value;
        let datevalue = selectdate.valueAsDate;
        let radioelement = document.getElementsByName("priority");
        let radiovalue = null;
        let projectvalue = null;
        for(let radio of radioelement) {
            if (radio.checked) {
                radiovalue = radio.value;
            }
        }
        if(selectproject.value == "") {
            projectvalue = null;
        }
        else {
            projectvalue = selectproject.value;
        }
        toDoLibrary.append(new toDoObject(titlevalue, descriptionvalue, datevalue, radiovalue, projectvalue));
        updatePage();
        //Reset form
        createModalContent(formDiv());
    });

    return div;
}

//Create Project form
function createProject() {
    currentform = "project";
    let div = document.createElement("div");
    div.classList.add("formcontent");

    let form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "return false");
    form.classList.add("todoformcontent")
    div.appendChild(form);

    //Title
    let titleinput = document.createElement("textarea");
    titleinput.required = true;
    titleinput.setAttribute("placeholder", "Project: Tower defence game");
    form.appendChild(titleinput);

    //Submit button
    let button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.classList.add("submitbutton")
    button.setAttribute("value", "Create new Project");
    form.appendChild(button);

    //Eventlistener
    form.addEventListener("submit", function(){
        let titlevalue = titleinput.value;
        toDoLibrary.appendProject(new projectObject(titlevalue));
        updatePage();
        //Reset form
        createModalContent(formDiv());
    });

    return div;
}

//Create Notes form
function createNote() {
    currentform = "note";
    let div = document.createElement("div");
    div.classList.add("formcontent");

    let form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "return false");
    form.classList.add("todoformcontent")
    div.appendChild(form);

    //Title
    let titleinput = document.createElement("textarea");
    titleinput.required = true;
    titleinput.setAttribute("placeholder", "Note: Gym");
    form.appendChild(titleinput);

    //Description
    let description = document.createElement("textarea");
    description.required = true;
    form.appendChild(description);
    description.setAttribute("placeholder", "Routine:...");
    description.classList.add("descriptionform");

    //Submit button
    let button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.classList.add("submitbutton")
    button.setAttribute("value", "Create new Note");
    form.appendChild(button);

    //Eventlistener
    form.addEventListener("submit", function(){
        let titlevalue = titleinput.value;
        let descriptionvalue = description.value;
        toDoLibrary.appendNote(new noteObject(titlevalue, descriptionvalue));
        updatePage();
        //Reset form
        createModalContent(formDiv());
    });

    return div;
}

export {formDiv};