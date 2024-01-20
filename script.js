"use strict";
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');

 if(menu.classList.contains('bx-menu-alt-right')){
    menu.classList.replace('bx-menu-alt-right','bx-no-entry');
    }else{
        menu.classList.replace('bx-no-entry','bx-menu-alt-right');
    }


}
window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('darkMode');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('darkMode');
    }
}

function capitalizeFirstLetter(input) {
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}

function submitForm(event) {
    event.preventDefault();

    // Reset error messages
    resetErrorMessages();

    // Validate and submit the form
    if (validateForm()) {
        displaySuccessMessage();
        resetForm();
    }
}

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const gmailId = document.getElementById("gmailId");
    const subject = document.getElementById("subject");
    const phoneNumber = document.getElementById("phoneNumber");
    const message = document.getElementById("message");

    isValid &= validateInput(firstName, "firstNameError", /^[a-zA-Z]+$/, "Invalid first name");
    isValid &= validateInput(lastName, "lastNameError", /^[a-zA-Z]+$/, "Invalid last name");
    isValid &= validateInput(gmailId, "gmailIdError", /^\S+@gmail.com\S+\.\S+$/, "Invalid Gmail ID");
    isValid &= validateInput(subject, "subjectError", /\S/, "Subject cannot be empty");
    isValid &= validateInput(phoneNumber, "phoneNumberError", /^[0-9]{10}$/, "Invalid phone number");
    isValid &= validateInput(message, "messageError", /\S/, "Message cannot be empty");

    return isValid;
}

function validateInput(input, errorId, pattern, errorMessage) {
    const value = input.value.trim();

    if (!pattern.test(value)) {
        displayErrorMessage(errorId, errorMessage);
        return false;
    }

    return true;
}

function displayErrorMessage(errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = errorMessage;
}

function resetErrorMessages() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.textContent = "";
    });
}

function displaySuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Message sent successfully!";
}

function resetForm() {
    const form = document.getElementById("box-1");
    form.reset();
}