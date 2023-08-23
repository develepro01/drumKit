//enthält Element mit der class "key"

console.log("test");

var keyElements = document.querySelectorAll(".key");
var buttonArray = [];
var idArray = [];

// buttonArray enthält alle verfügbaren Buchstaben
//idArray enthält alle id der Buchstaben

keyElements.forEach(function (element) {
  buttonArray.push(document.getElementById(element.id).children[0].textContent);
  idArray.push(element.id);
});

// über diesen Index wird aus dem idArray die id des Buchstaben ermmittelt
//diese wird mit dem String "Audio" verbunden, um aid die richige Audiodatei zuzugreifen

document.addEventListener("keypress", function (event) {
  // es wird überprüft ob der gedrückte Buchstabe im buttonArray vorhanden ist
  if (buttonArray.includes(event.key.toUpperCase())) {
    //indexElement ist der index des Buchstaben im buttonArray

    var indexElement = buttonArray.indexOf(event.key.toUpperCase());

    console.log(idArray[indexElement] + "Audio");

    function playAudio() {
      var audio = new Audio(
        document.getElementById(idArray[indexElement] + "Audio").src
      );
      audio.play();
    }

    playAudio();

    //Animation für Knopfdruck
    document.getElementById(idArray[indexElement]).classList.add("playing");

    setTimeout(pressAnimationReturn, 200);

    function pressAnimationReturn() {
      document
        .getElementById(idArray[indexElement])
        .classList.remove("playing");
    }

    if (idArray[indexElement] == "74" || idArray[indexElement] == "75") {
      document.getElementById("hihat-top").style.top = "170px";
      setTimeout(hihatReturn, 200);
      function hihatReturn() {
        document.getElementById("hihat-top").style.top = "162px";
      }

      playAudio();
    }

    if (idArray[indexElement] == "72" || idArray[indexElement] == "73") {
      document.getElementById("crash-ride").style.transform =
        "rotate(-20deg) scale(1.5)";
      setTimeout(crashReturn, 200);
      function crashReturn() {
        document.getElementById("crash-ride").style.transform =
          "rotate(-7.2deg) scale(1.5)";
      }

      playAudio();
    }
  }
});
