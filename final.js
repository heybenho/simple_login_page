let divReg, divMain;

document.addEventListener("DOMContentLoaded", function {  // Function executes when document goes from loading to interactive.
    divReg = document.getElementById("divRegistered");
    divMain = document.getElementById("divMain");
    divMain.addEventListener("onfocus", fHandleEnter, true);
    divMain.addEventListener("blur", fHandleExit, true);

})

function fHandleEnter(event) {
    event.target
}