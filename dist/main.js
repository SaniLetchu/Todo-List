/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/To_do_object.js":
/*!*****************************!*\
  !*** ./src/To_do_object.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toDoObject(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoObject);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _To_do_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./To_do_object */ "./src/To_do_object.js");
//Import other scripts



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

let divcontent = document.querySelector(".content");

//Creates the content in the .content div
function createContent(content) {
    divcontent.replaceWith(content)
    divcontent = content;
}

console.log(localStorage.length);

//Check local storage for information
(function checkLocaleStorage() {


    //First time entering website So lets initialize some dummy content
    if(localStorage.length == 0) {
        let dummycontent1 =  (0,_To_do_object__WEBPACK_IMPORTED_MODULE_0__["default"])()
        //Bulletproof method to not initialize dummy content again even if user deletes everything
        localStorage.setItem(-1, "Already visited site :). Not my fault you deleted everything");
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7VUNQekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3dDO0FBQ0s7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtFQUErRSxrQ0FBa0M7QUFDakgsNkVBQTZFLDZCQUE2Qjs7O0FBRzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsNkJBQTZCLHlEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub19kb19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvRG9PYmplY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9PYmplY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL0ltcG9ydCBvdGhlciBzY3JpcHRzXG5pbXBvcnQgdG9Eb09iamVjdCBmcm9tICcuL1RvX2RvX29iamVjdCc7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxubGV0IHNpZGViYXJPcGVuID0gZmFsc2U7XG5sZXQgaW5uZXJzaWRlYmFyT3BlblByb2plY3QgPSBmYWxzZTtcbmxldCBpbm5lcnNpZGViYXJPcGVuTm90ZXMgPSBmYWxzZTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51YnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmF2KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgb3BlbklubmVyTmF2UHJvamVjdChcIi5wcm9qZWN0c1wiKTt9KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7IG9wZW5Jbm5lck5hdk5vdGVzKFwiLm5vdGVzXCIpO30pO1xuXG5cbi8vT3BlbnMgc2lkZWJhciBuYXZcbmZ1bmN0aW9uIG9wZW5OYXYoKSB7XG4gICAgaWYoIXNpZGViYXJPcGVuKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5zdHlsZS5tYXhXaWR0aCA9IFwiMTV2d1wiO1xuICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxNXZ3XCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5zdHlsZS5tYXhXaWR0aCA9IFwiODV2d1wiO1xuICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXJpdGVtXCIpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUgPSBcImRpc3BsYXk6IGZsZXhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHNpZGViYXJPcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNsb3NlTmF2KCk7XG4gICAgfVxuICB9XG4gIFxuLy9DbG9zZXMgc2lkZWJhciBuYXZcbmZ1bmN0aW9uIGNsb3NlTmF2KCkge1xuICAgIHNpZGViYXJPcGVuID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLnN0eWxlLm1heFdpZHRoID0gXCIwXCI7XG4gICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuc3R5bGUubWFyZ2luTGVmdD0gXCIwXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLnN0eWxlLm1heFdpZHRoID0gXCIxMDB2d1wiO1xuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhcml0ZW1cIik7XG4gICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0uc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICB9KTtcbn1cblxuLy9PcGVuIGlubmVyc2lkZWJhclxuZnVuY3Rpb24gb3BlbklubmVyTmF2UHJvamVjdChuYW1lKSB7XG4gICAgaWYoIWlubmVyc2lkZWJhck9wZW5Qcm9qZWN0KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuaGVpZ2h0ID0gXCIyNTBweFwiO1xuICAgICAgICBpbm5lcnNpZGViYXJPcGVuUHJvamVjdCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjbG9zZUlubmVyTmF2UHJvamVjdChuYW1lKVxuICAgIH1cbn1cblxuLy9DbG9zZSBpbm5lcnNpZGViYXJcbmZ1bmN0aW9uIGNsb3NlSW5uZXJOYXZQcm9qZWN0KG5hbWUpIHtcbiAgICBpbm5lcnNpZGViYXJPcGVuUHJvamVjdCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG59XG5cbi8vT3BlbiBpbm5lcnNpZGViYXJcbmZ1bmN0aW9uIG9wZW5Jbm5lck5hdk5vdGVzKG5hbWUpIHtcbiAgICBpZighaW5uZXJzaWRlYmFyT3Blbk5vdGVzKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuaGVpZ2h0ID0gXCIyNTBweFwiO1xuICAgICAgICBpbm5lcnNpZGViYXJPcGVuTm90ZXMgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2xvc2VJbm5lck5hdk5vdGVzKG5hbWUpXG4gICAgfVxufVxuXG4vL0Nsb3NlIGlubmVyc2lkZWJhclxuZnVuY3Rpb24gY2xvc2VJbm5lck5hdk5vdGVzKG5hbWUpIHtcbiAgICBpbm5lcnNpZGViYXJPcGVuTm90ZXMgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWUpLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xufVxuXG5sZXQgZGl2Y29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy9DcmVhdGVzIHRoZSBjb250ZW50IGluIHRoZSAuY29udGVudCBkaXZcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoY29udGVudCkge1xuICAgIGRpdmNvbnRlbnQucmVwbGFjZVdpdGgoY29udGVudClcbiAgICBkaXZjb250ZW50ID0gY29udGVudDtcbn1cblxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmxlbmd0aCk7XG5cbi8vQ2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgaW5mb3JtYXRpb25cbihmdW5jdGlvbiBjaGVja0xvY2FsZVN0b3JhZ2UoKSB7XG5cblxuICAgIC8vRmlyc3QgdGltZSBlbnRlcmluZyB3ZWJzaXRlIFNvIGxldHMgaW5pdGlhbGl6ZSBzb21lIGR1bW15IGNvbnRlbnRcbiAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApIHtcbiAgICAgICAgbGV0IGR1bW15Y29udGVudDEgPSAgdG9Eb09iamVjdCgpXG4gICAgICAgIC8vQnVsbGV0cHJvb2YgbWV0aG9kIHRvIG5vdCBpbml0aWFsaXplIGR1bW15IGNvbnRlbnQgYWdhaW4gZXZlbiBpZiB1c2VyIGRlbGV0ZXMgZXZlcnl0aGluZ1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgtMSwgXCJBbHJlYWR5IHZpc2l0ZWQgc2l0ZSA6KS4gTm90IG15IGZhdWx0IHlvdSBkZWxldGVkIGV2ZXJ5dGhpbmdcIik7XG4gICAgfVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=