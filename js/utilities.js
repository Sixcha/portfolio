"use strict"

function showSide(){
    let arrowRotation = document.getElementById("faArrow").className;
    if (arrowRotation === "fas fa-angle-right fa-2x"){
        document.getElementById("faArrow").className = "fas fa-angle-left fa-2x";
    }
    else if(arrowRotation === "fas fa-angle-left fa-2x"){
        document.getElementById("faArrow").className = "fas fa-angle-right fa-2x";
    }
    else{
        
    }
    let sideLinks = document.getElementsByClassName("hidden");
    for(let i=0;i<sideLinks.length;i++){
        if (sideLinks[i].style.display === "block"){
            sideLinks[i].style.display = "none";
        }
        else if (window.innerWidth> 1024 && sideLinks[i].style.display === ""){
            sideLinks[i].style.display = "none";
        }
        else {
            sideLinks[i].style.display = "block";
        }
    }    
}

function fixSide(){
    let sideLinks = document.getElementsByClassName("hidden");
    if(window.innerWidth> 1024){
        document.getElementById("faArrow").className = "fas fa-bars fa-2x";
        for(let i=0;i<sideLinks.length;i++){
            if (sideLinks[i].style.display === "block"){
                sideLinks[i].style.display = "none";
            }
        }
    }
    else{
        document.getElementById("faArrow").className = "fas fa-angle-left fa-2x";
        for(let i=0;i<sideLinks.length;i++){
            if (sideLinks[i].style.display === "block"){
                sideLinks[i].style.display = "none";
            }
        }
    }
    
}

window.addEventListener('resize', fixSide);
window.addEventListener('DOMContentLoaded',fixSide)

function revealGrayed(){
    let grayedText = document.getElementsByClassName("grayed");
    let experimentButton = document.querySelector(".experimentReveal");
    for(let i=0; i<grayedText.length; i++){
        if(grayedText[i].style.backgroundColor === "rgb(144, 113, 104)"){
            grayedText[i].style.backgroundColor = "black"
            experimentButton.innerHTML = "Reveal Hidden Files"
        }
        else{
            grayedText[i].style.backgroundColor = "#907168"
            experimentButton.innerHTML = "Hide Confidential Files"
        }
    }
}