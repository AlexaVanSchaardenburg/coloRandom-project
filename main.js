//Data Model
var colorPalettes = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button');
var boxes = document.querySelectorAll('.box');
var hexColors = document.querySelectorAll('.box p');

//Event Listeners
generateRandomButton.addEventListener('click', displayPalette);
window.addEventListener('load', displayPalette);

//Functions
function generateRandomHex(){
    var hexCharacters = [];
    for (var i=0; hexCharacters.length<6; i++){
      var characters = ['A', 'B', 'C', 'D', 'E', 'F',1,2,3,4,5,6,7,8,9]
      indexNum = Math.floor(Math.random() *14)
      hexCharacters.push(characters[indexNum])
    }
    hexCode = `#${hexCharacters.join('')}`
    return hexCode
};

function generateRandomPalette() {
    var colorPalette = [];
      for (var i=0; colorPalette.length<5; i++){
          colorPalette.push(generateRandomHex())
      }
      colorPalettes.push(colorPalette)
      return colorPalette
  };

function displayPalette() {
    var colorPalette = generateRandomPalette();
    for (var i = 0; i < hexColors.length; i++) {
        boxes[i].style.setProperty("background-color", colorPalette[i]);
        hexColors[i].innerText = colorPalette[i];
    }
}

