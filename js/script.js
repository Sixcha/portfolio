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

