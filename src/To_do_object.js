import { de } from "date-fns/locale";

function toDoObject(title, description, dueDate, priority, project = null) {
    this.title = title;
    this.description = description;
    this.dueDate = JSON.parse(JSON.stringify(dueDate));
    this.priority = priority;
    this.project = project;
    this.completed = false;
}

function noteObject(title, description) {
    this.title = title;
    this.description = description;
}

function projectObject(title) {
    this.title = title;
}

//Module that handles all the toDoObjects inside and outside of localstorage
const toDoLibrary = (() => {
    //All toDoObjects
    const list = {};
    const notes = {};
    const projects = {};
    //Download all of the existing toDoObjects from localstorage
    const download = () => {
        let i = 0;
        while(localStorage.getItem(`${i}`) !== null) {
            let item = localStorage.getItem(`${i}`);
            list[`${i}`] = JSON.parse(item);
            i++;
        }
        let j = 0;
        while(localStorage.getItem(`notes${j}`) !== null) {
            let item = localStorage.getItem(`notes${j}`);
            notes[`notes${j}`] = JSON.parse(item);
            j++;
        }
        let z = 0;
        while(localStorage.getItem(`projects${z}`) !== null) {
            let item = localStorage.getItem(`projects${z}`);
            projects[`projects${z}`] = JSON.parse(item);
            z++;
        }
        
    }
    //Uploads all of the toDoObjects to localstorage
    const upload = () => {
        for(let key in list) {
            let value = list[key];
            localStorage.setItem(key, JSON.stringify(value));
        }
        for(let key1 in notes) {
            let value = notes[key1];
            localStorage.setItem(key1, JSON.stringify(value));
        }
        for(let key2 in projects) {
            let value = projects[key2];
            localStorage.setItem(key2, JSON.stringify(value));
        }
    }

    //You wont be able to change project value after initialization
    const update = (key, title, description, dueDate, priority, completed) => {
        let item = list[key];
        item.title = title; 
        item.description = description;
        item.dueDate = JSON.parse(JSON.stringify(dueDate));
        item.priority = priority;
        item.completed = completed;
        list[key] = item;
        upload();
    }
    //Update note
    const updateNote = (key, title, description) => {
        let item = notes[key];
        item.title = title;
        item.description = description;
        notes[key] = item;
        upload();
    }
    //Append new object to the list and localstorage
    const append = (object) => {
        list[Object.keys(list).length] = object;
        upload();
    }
    //Add new project
    const appendProject = (object) => {
        projects[`projects${Object.keys(projects).length}`] = object;
        upload();
    }
    //Add new note
    const appendNote = (object) => {
        notes[`notes${Object.keys(notes).length}`] = object;
        upload();
    }
    //Removes object from list and localstorage
    const remove = (key) => {
        delete list[key];
        localStorage.removeItem(key);
        let i = 0;
        for(let key in list) {
            let value = list[key];
            delete list[key];
            localStorage.removeItem(key);
            list[`${i}`] = value;
            i++;
        }
        upload();
    }
    //Remove note
    const removeNote = (key) => {
        delete notes[key];
        localStorage.removeItem(key);
        let i = 0;
        for(let key in notes) {
            let value = notes[key];
            delete notes[key];
            localStorage.removeItem(key);
            notes[`notes${i}`] = value;
            i++;
        }
        upload();
    }
    //Remove project
    const removeProject = (key) => {
        delete projects[key];
        localStorage.removeItem(key);
        let i = 0;
        for(let key in projects) {
            let value = projects[key];
            delete projects[key];
            localStorage.removeItem(key);
            projects[`projects${i}`] = value;
            i++;
        }
        upload();
    }
    return {
        list,
        projects,
        notes,
        download,
        upload,
        update,
        updateNote,
        append,
        remove,
        removeNote,
        removeProject,
        appendNote,
        appendProject
    };
})();

export {toDoObject, toDoLibrary, noteObject, projectObject};