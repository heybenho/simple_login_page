let divReg, divMain;

document.addEventListener("DOMContentLoaded", function() {  // Function executes when document goes from loading to interactive.
    divReg = document.getElementById("divRegistered");
    divMain = document.getElementById("divMain");
    divMain.addEventListener("focus", fHandleEnter, true);  // When in focus, change background to yellow.
    divMain.addEventListener("blur", fHandleExit, true);  // When out of focus, reset background.

    fProcessForm();
})

function fHandleEnter(evt) {
    // If the event's target tag is INPUT, change background color to yellow.
    if (evt.target.tagName== "INPUT") evt.target.style.backgroundColor = "yellow";
}

function fHandleExit(evt) {
    // If the event's target tag is INPUT, clear background color.
    if (evt.target.tagName == "INPUT") evt.target.style.backgroundColor = "";
}

function fProcessForm() {
    let strQueryString = decodeURIComponent(location.search);  // Assigns location from URL.
    let login = strQueryString.replace(/^(.*?=)/, "");  // Takes only last part from location.
    if(login.length > 0) {
        divReg.innerHTML = `Thank you, ${login}, you are now registered.`;  // Backticks (tildes) used to format string.
        divReg.style.display = "none";  // Keeps Registered screen hidden before fade in.
        $("#divRegistered").fadeIn(3000);  // Fades in Registered screen over 3 seconds.
        divMain.style.display = "none";
    } else {  // Assuming login length cannot be less than 0.
        divMain.style.display = "block";
        divReg.style.display = "none";
    };
}