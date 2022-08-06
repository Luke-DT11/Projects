"use strict";
const button = document.getElementById("hoverbutton");
const explode = document.getElementById("button_effect");

button.addEventListener("click", ExplodeClick(explode));



/* Functions */
function AlertClick(){
    alert("Button Clicked");
}

function ExplodeClick(explode){
    console.log("test")
    if (explode.style.opacity > 0.74){
        explode.style.opacity = 0.1;
    } else {
        explode.style.opacity = 0.75;
    }
}