let divReg, divMain;

document.addEventListener("DOMContentLoaded", function() {  // Function executes when document goes from loading to interactive.
    divReg = document.getElementById("divRegistered");
    divMain = document.getElementById("divMain");
    // divMain.addEventListener("focus", fHandleEnter, true);  // When in focus, change background to yellow.
    // divMain.addEventListener("blur", fHandleExit, true);  // When out of focus, reset background.
    $("input").focus(function() {$(this).css("background-color", "yellow"); });  // Same as the addEventListener line, but with jQuery.
    $("input").blur(function () {$(this).css("background-color", ""); });  // Same as the addEventListener line, but with jQuery.
    fProcessForm();

    let inputElements = document.querySelectorAll("#frmRegister input[type=text], input[type=password]");  // Selects all input texts and passwords.
    console.log(inputElements);  // Checks to see all input texts and passwords are selected.

    let spanElements = document.querySelectorAll("form span");  // Selects all span elements within the form.
    console.log(spanElements);  // Checks to see all span elements within the form are selected.

    inputElements[2].addEventListener("blur", function() {fCompareInputs(inputElements[1].value, inputElements[2].value, spanElements[2])},true);
    inputElements[4].addEventListener("blur", function() {fCompareInputs(inputElements[3].value, inputElements[4].value, spanElements[4])},true);
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

function fCompareInputs(value1, value2, display) {
    console.log(value1, value2);
    if (value1.length==0 || value2.length==0) {
        display.innerHTML = "";
        display.style = "";
    } else {
        if (value1 == value2) {
            display.innerHTML = "Entries match";
            display.style.backgroundColor = "green";
        } else {
            display.innerHTML = "Entries do not match";
            display.style.backgroundColor = "red";
        }
    }
}

