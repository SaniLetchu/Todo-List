/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgc2lkZWJhck9wZW4gPSBmYWxzZTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmF2KTtcblxuXG4vL09wZW5zIHNpZGViYXIgbmF2XG5mdW5jdGlvbiBvcGVuTmF2KCkge1xuICAgIGlmKCFzaWRlYmFyT3Blbikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuc3R5bGUubWluV2lkdGggPSBcIjE1dndcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjE1dndcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnN0eWxlLndpZHRoID0gXCI4NXZ3XCI7XG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhcml0ZW1cIik7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZSA9IFwiZGlzcGxheTogZmxleFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgc2lkZWJhck9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2xvc2VOYXYoKTtcbiAgICB9XG4gIH1cbiAgXG4vL0Nsb3NlcyBzaWRlYmFyIG5hdlxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gICAgc2lkZWJhck9wZW4gPSBmYWxzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuc3R5bGUubWluV2lkdGggPSBcIjBcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuc3R5bGUubWFyZ2luTGVmdD0gXCIwXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhcml0ZW1cIik7XG4gICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0uc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=