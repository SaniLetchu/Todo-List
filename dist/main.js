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
        document.querySelector(".sidebar").style.minWidth = "max(250px, 15vw)";
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
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBzaWRlYmFyT3BlbiA9IGZhbHNlO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5OYXYpO1xuXG5cbi8vT3BlbnMgc2lkZWJhciBuYXZcbmZ1bmN0aW9uIG9wZW5OYXYoKSB7XG4gICAgaWYoIXNpZGViYXJPcGVuKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5zdHlsZS5taW5XaWR0aCA9IFwibWF4KDI1MHB4LCAxNXZ3KVwiO1xuICAgICAgICBzaWRlYmFyT3BlbiA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjbG9zZU5hdigpO1xuICAgIH1cbiAgfVxuICBcbi8vQ2xvc2VzIHNpZGViYXIgbmF2XG5mdW5jdGlvbiBjbG9zZU5hdigpIHtcbiAgICBzaWRlYmFyT3BlbiA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5zdHlsZS5taW5XaWR0aCA9IFwiMFwiO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==