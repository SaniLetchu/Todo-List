/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrRUFBK0Usa0NBQWtDO0FBQ2pILDZFQUE2RSw2QkFBNkI7OztBQUcxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgc2lkZWJhck9wZW4gPSBmYWxzZTtcbmxldCBpbm5lcnNpZGViYXJPcGVuUHJvamVjdCA9IGZhbHNlO1xubGV0IGlubmVyc2lkZWJhck9wZW5Ob3RlcyA9IGZhbHNlO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OYXYpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0YnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyBvcGVuSW5uZXJOYXZQcm9qZWN0KFwiLnByb2plY3RzXCIpO30pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc2J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgb3BlbklubmVyTmF2Tm90ZXMoXCIubm90ZXNcIik7fSk7XG5cblxuLy9PcGVucyBzaWRlYmFyIG5hdlxuZnVuY3Rpb24gb3Blbk5hdigpIHtcbiAgICBpZighc2lkZWJhck9wZW4pIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLnN0eWxlLm1heFdpZHRoID0gXCIxNXZ3XCI7XG4gICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjE1dndcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnN0eWxlLm1heFdpZHRoID0gXCI4NXZ3XCI7XG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhcml0ZW1cIik7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZSA9IFwiZGlzcGxheTogZmxleFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgc2lkZWJhck9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2xvc2VOYXYoKTtcbiAgICB9XG4gIH1cbiAgXG4vL0Nsb3NlcyBzaWRlYmFyIG5hdlxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gICAgc2lkZWJhck9wZW4gPSBmYWxzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuc3R5bGUubWF4V2lkdGggPSBcIjBcIjtcbiAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5zdHlsZS5tYXJnaW5MZWZ0PSBcIjBcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuc3R5bGUubWF4V2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyaXRlbVwiKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuICAgIH0pO1xufVxuXG4vL09wZW4gaW5uZXJzaWRlYmFyXG5mdW5jdGlvbiBvcGVuSW5uZXJOYXZQcm9qZWN0KG5hbWUpIHtcbiAgICBpZighaW5uZXJzaWRlYmFyT3BlblByb2plY3QpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lKS5zdHlsZS5oZWlnaHQgPSBcIjI1MHB4XCI7XG4gICAgICAgIGlubmVyc2lkZWJhck9wZW5Qcm9qZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNsb3NlSW5uZXJOYXZQcm9qZWN0KG5hbWUpXG4gICAgfVxufVxuXG4vL0Nsb3NlIGlubmVyc2lkZWJhclxuZnVuY3Rpb24gY2xvc2VJbm5lck5hdlByb2plY3QobmFtZSkge1xuICAgIGlubmVyc2lkZWJhck9wZW5Qcm9qZWN0ID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lKS5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbn1cblxuLy9PcGVuIGlubmVyc2lkZWJhclxuZnVuY3Rpb24gb3BlbklubmVyTmF2Tm90ZXMobmFtZSkge1xuICAgIGlmKCFpbm5lcnNpZGViYXJPcGVuTm90ZXMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lKS5zdHlsZS5oZWlnaHQgPSBcIjI1MHB4XCI7XG4gICAgICAgIGlubmVyc2lkZWJhck9wZW5Ob3RlcyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjbG9zZUlubmVyTmF2Tm90ZXMobmFtZSlcbiAgICB9XG59XG5cbi8vQ2xvc2UgaW5uZXJzaWRlYmFyXG5mdW5jdGlvbiBjbG9zZUlubmVyTmF2Tm90ZXMobmFtZSkge1xuICAgIGlubmVyc2lkZWJhck9wZW5Ob3RlcyA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9