function toDoObject(title, description, dueDate, priority, project = null) {
    this.title = title;
    this.description = description;
    this.dueDate = JSON.parse(JSON.stringify(dueDate));
    this.priority = priority;
    this.project = project;
    this.completed = false;
}

//Module that handles all the toDoObjects inside and outside of localstorage
const toDoLibrary = (() => {
    //All toDoObjects
    const list = {};
    //Download all of the existing toDoObjects from localstorage
    const download = () => {
        let i = 0;
        while(localStorage.getItem(`${i}`) !== null) {
            let item = localStorage.getItem(`${i}`);
            list[`${i}`] = JSON.parse(item);
            i++;
        }
    }
    //Uploads all of the toDoObjects to localstorage
    const upload = () => {
        for(var key in list) {
            var value = list[key];
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    //You wont be able to change project value after initialization
    const update = (key, title, description, dueDate, priority, completed) => {
        let item = list[key];
        item.title = title; 
        item.description = description;
        item.dueDate = dueDate;
        item.priority = priority;
        item.completed = completed;
        list[key] = item;
        upload();
    }
    //Append new object to the list and localstorage
    const append = (object) => {
        list[Object.keys(list).length] = object;
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
    return {
        list,
        download,
        upload,
        update,
        append,
        remove
    };
})();

export {toDoObject, toDoLibrary};