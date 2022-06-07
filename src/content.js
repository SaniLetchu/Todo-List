import { compareAsc, format, parseISO, isSameDay} from 'date-fns'
import { toDoLibrary } from './To_do_object';
import {createContent, createModalContent, closeModal} from './index'

//Given list of objects create content to todocontent
function todoCreate(title, objectlist) {
    const maindiv = document.createElement("div");
    maindiv.classList.add("todocontent");
    const heading = document.querySelector(".heading");
    heading.textContent = title;
    let todos = objectlist();
    for(let key in todos) {
        let value = todos[key];
        const div = document.createElement("div");
        div.classList.add("todo")
        div.classList.add(`${value.priority}`);
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.classList.add("checkbox");
        input.classList.add(`${key}`);
        if(value.completed) {
            input.checked = true;
        }
        input.addEventListener("change", e => {
            if(e.target.checked) {
                toDoLibrary.update(key, value.title, value.description, value.dueDate, value.priority, true);
                createContent(todoCreate(title, objectlist));
            }
            else {
                toDoLibrary.update(key, value.title, value.description, value.dueDate, value.priority, false);
                createContent(todoCreate(title, objectlist));
            }
        });
        div.appendChild(input);
        const name = document.createElement("p");
        name.textContent = value.title;
        div.appendChild(name);
        const button = document.createElement("button");
        button.classList.add("details")
        button.textContent = "Details";
        button.addEventListener("click", function(){
            let modaldiv = document.createElement("div");
            modaldiv.classList.add("modal-content");
            modaldiv.classList.add("details-content");
            let x = document.createElement("img");
            x.setAttribute("src", "x.svg");
            x.classList.add("closemodal");
            x.addEventListener("click", function(){
                closeModal();
            });
            modaldiv.appendChild(x);
            let h2 = document.createElement("h2");
            h2.textContent = value.title;
            modaldiv.appendChild(h2);
            let project = document.createElement("h3");
            project.textContent = "Project:";
            modaldiv.appendChild(project);
            let projectstuff = document.createElement("p");
            projectstuff.textContent = value.project;
            modaldiv.appendChild(projectstuff);
            let prioritys = document.createElement("h3");
            prioritys.textContent = "Priority:";
            modaldiv.appendChild(prioritys);
            let priorityvalue = null;
            if(value.priority == "green") {
                priorityvalue = "Low";
            }
            else if(value.priority == "red") {
                priorityvalue = "High";
            }
            else {
                priorityvalue = "Medium";
            }
            let prioritycontent = document.createElement("p");
            prioritycontent.textContent = priorityvalue;
            modaldiv.appendChild(prioritycontent);
            let duedate = document.createElement("h3");
            duedate.textContent = "Due Date:";
            modaldiv.appendChild(duedate);
            let duedatecontent = document.createElement("p");
            duedatecontent.textContent = format(parseISO(value.dueDate), "yyyy-MMM-do");
            modaldiv.appendChild(duedatecontent);
            let details = document.createElement("h3");
            details.textContent = "Details:";
            modaldiv.appendChild(details);
            let detailscontent = document.createElement("p");
            detailscontent.textContent = value.description;
            modaldiv.appendChild(detailscontent)
            createModalContent(modaldiv);
        });
        div.appendChild(button);
        const date = document.createElement("p");
        date.classList.add("datewidth");
        date.textContent = format(parseISO(value.dueDate), "yyyy-MMM-do");
        const edit = document.createElement("img");
        const trash = document.createElement("img");
        edit.setAttribute("src", "edit.svg");
        trash.setAttribute("src", "trash.svg");
        edit.classList.add("todoicon");
        trash.classList.add("todoicon");
        trash.addEventListener("click", function() {
            console.log(key);
            toDoLibrary.remove(key);
            div.parentNode.removeChild(div);
            createContent(todoCreate(title, objectlist));
        });
        div.appendChild(date);
        div.appendChild(edit);
        div.appendChild(trash);

        maindiv.appendChild(div);
    }
    return maindiv;
}



export default todoCreate;