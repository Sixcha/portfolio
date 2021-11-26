"use strict"

let writingButton = document.querySelector("#WritingButton");
let websitesButton = document.querySelector("#WebsitesButton");
let gamesButton = document.querySelector("#GamesButton");

const articleButtons = document.querySelectorAll (".articleButton");

writingButton.addEventListener("click",() => {

    let writing = "writing";

    let data = {button : writing};

    JSON.stringify(data);

    let options = {
        method: "POST",
        body: data
    }

    let send = new Request ("php/searchArticles.php",options)

    fetch(send)
        .then(elements => elements.text())
        .then(elements => {
            document.getElementById("ajax2").innerHTML = elements
        })
        .then(function(){
            let articleButtonsTemp = document.querySelectorAll (".articleButton");
            articleButtonsTemp.forEach (element => 
                element.addEventListener("click",function(element){
            
                    let lit = this.id;
                
                    let data = {button : lit};
                
                    data = JSON.stringify(data);
                
                    let options = {
                        method: "POST",
                        body: data
                    }
                
                    let send = new Request ("php/showContent.php",options);
                
                    fetch(send)
                        .then(elements => elements.text())
                        .then(elements => {
                            document.getElementById("ajax2").innerHTML = elements
                        })
                })
            )
        })
})

articleButtons.forEach (element => 
    element.addEventListener("click",function(element){

        let lit = this.id;
    
        let data = {button : lit};
    
        data = JSON.stringify(data);
    
        let options = {
            method: "POST",
            body: data
        }
    
        let send = new Request ("php/showContent.php",options);
    
        fetch(send)
            .then(elements => elements.text())
            .then(elements => {
                document.getElementById("ajax2").innerHTML = elements
            })
    })
)

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
        else if (window.innerWidth> 768 && sideLinks[i].style.display === ""){
            sideLinks[i].style.display = "none";
        }
        else {
            sideLinks[i].style.display = "block";
        }
    }    
}

function fixSide(){
    let sideLinks = document.getElementsByClassName("hidden");
    if(window.innerWidth> 768){
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