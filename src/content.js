import { compareAsc, format, parseISO, isSameDay} from 'date-fns'
import { toDoLibrary } from './To_do_object';
import {createContent} from './index'

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