const inputs = document.getElementById("input");
const text = document.querySelector(".tasks"); 

function Add() {
    if (inputs.value.trim() === "") { 
        alert("Please Enter a Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fas fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector("i").addEventListener("click", function () {
            newEle.remove();
        });
    }
}
