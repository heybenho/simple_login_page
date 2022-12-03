let divReg, divMain;

document.addEventListener("DOMContentLoaded", function() {  // Function executes when document goes from loading to interactive.
    divReg = document.getElementById("divRegistered");
    divMain = document.getElementById("divMain");
    // divMain.addEventListener("focus", fHandleEnter, true);  // When in focus, change background to yellow.
    // divMain.addEventListener("blur", fHandleExit, true);  // When out of focus, reset background.
    $("input").focus(function() {$(this).css("background-color", "yellow"); });  // Same as the addEventListener line, but using jQuery and applied to all inputs.
    $("input").blur(function () {$(this).css("background-color", ""); });  // Same as the addEventListener line, but using jQuery and applied to all inputs.
    
    fProcessForm();

    let inputElements = document.querySelectorAll("#frmRegister input[type=text], input[type=password]");  // Selects all input texts and passwords.
    console.log(inputElements);  // Checks to see all input texts and passwords are selected.

    let spanElements = document.querySelectorAll("form span");  // Selects all span elements within the form.
    console.log(spanElements);  // Checks to see all span elements within the form are selected.

    // Checks to confirm if both passwords and both emails match.
    inputElements[2].addEventListener("blur", function() {fCompareInputs(inputElements[1].value, inputElements[2].value, spanElements[2])},true);
    inputElements[4].addEventListener("blur", function() {fCompareInputs(inputElements[3].value, inputElements[4].value, spanElements[4])},true);

    // Calls function to check that the Email input is a valid email.
    inputElements[3].addEventListener("keyup", function() {fValidateEmail(inputElements[3], spanElements[3])}, true);
})

function fHandleEnter(evt) {
    // If the event's target tag is INPUT, change background color to yellow.
    if (evt.target.tagName== "INPUT") evt.target.style.backgroundColor = "yellow";
}

function fHandleExit(evt) {
    // If the event's target tag is INPUT, clear background color.
    if (evt.target.tagName == "INPUT") evt.target.style.backgroundColor = "";
}

// This function processes the form and sends the user to the confirmation screen.
function fProcessForm() {
    let strQueryString = decodeURIComponent(location.search);  // Assigns location from URL.
    let login = strQueryString.replace(/^(.*?=)/, "");  // Takes only last part from location.
    if(login.length > 0) {
        divReg.innerHTML = `Thank you, ${login}, you are now registered.`;  // Backticks (tildes) used to format string.
        divReg.style.display = "none";  // Keeps Registered screen hidden before fade in.
        $("#divRegistered").fadeIn(3000);  // Fades in Registered screen over 3 seconds.
        divMain.style.display = "none";
    } else {
        divMain.style.display = "block";
        divReg.style.display = "none";
    };
}

// This function checks that the password/email and their confirm inputs match.
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

// This function validates the email input.
function fValidateEmail(userEmail, emailDisplay) {
    let emailPattern = /^[\w+.-]+@[\w+-]+\.[A-Za-z]{2,}/
    // Pattern checks that the email has this struture: at least 1 letter/number/+.- symbol, an @ symbol, at least 1 letter/number/+.- symbol, a period, and then at least 2 letters at the end.
    if(userEmail.value.match(emailPattern)) {
        emailDisplay.innerHTML = "Email is valid";
        emailDisplay.style.backgroundColor = "green";
    } else {
        emailDisplay.innerHTML = "Invalid email";
        emailDisplay.style.backgroundColor = "red";
    }
}