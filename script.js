
//enthält Element mit der class "key"

var keyElements = document.querySelectorAll(".key")



var buttonArray = [];
var idArray = [];

// buttonArray enthält alle verfügbaren Buchstaben
//idArray enthält alle id der Buchstaben

keyElements.forEach(function(element) {
    buttonArray.push(document.getElementById(element.id).children[0].textContent);
    idArray.push(element.id);
});

console.log(buttonArray);
console.log(idArray);





document.addEventListener("keypress", function(event) {
    
// es wird überprüft ob der gedrückte Buchstabe im buttonArray vorhanden ist
    if(buttonArray.includes(event.key)){

        //indexElement ist der index des Buchstaben im buttonArray

        let indexElement = buttonArray.indexOf(event.key)
       

        console.log(idArray[indexElement] + "Audio");

        // über diesen Index wird aus dem idArray die id des Buchstaben ermmittelt
        //diese wird mit dem String "Audio" verbunden, um aid die richige Audiodatei zuzugreifen
        var audio = new Audio(document.getElementById(idArray[indexElement] + "Audio").src);
        audio.play()


        //Animation für Knopfdruck

        document.getElementById(idArray[indexElement]).style.height = "35px";
        document.getElementById(idArray[indexElement]).style.width = "35px";


        setTimeout(pressAnimationReturn, 200)

        function pressAnimationReturn(){

        document.getElementById(idArray[indexElement]).style.height = "32px";
        document.getElementById(idArray[indexElement]).style.width = "32px";

        }

        


    }

});










    
