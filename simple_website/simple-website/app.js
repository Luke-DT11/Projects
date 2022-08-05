"use strict";
// Reference t button on html page
const switcher = document.querySelector('.btn');
// Event Handler for clicking button
switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme"){
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log("current class name: " + className);
});
