//Data Model
var colorPalettes = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button')

//Event Listeners
generateRandomButton.addEventListener('click', generateRandomPalette);

//Generating random hex codes 
function generateRandomHex(){
    var hexCharacters = [];
    for (var i=0; hexCharacters.length<7; i++){
      var characters = ['A', 'B', 'C', 'D', 'E', 'F',1,2,3,4,5,6,7,8,9]
      indexNum = Math.floor(Math.random() *14)
      hexCharacters.push(characters[indexNum])
    }
    hexCode = `#${hexCharacters.join('')}`
    return hexCode
};

//Generate random color palette function
function generateRandomPalette() {
    var colorPalette = []
    for (var i=0; colorPalette.length<5; i++){
        colorPalette.push(generateRandomHex())
    }
    colorPalettes.push(colorPalette)
    displayPalette()
    return colorPalette
};

//Change boxes to generated colors & change text below boxes to generated hex
function displayPalette() {
    //display array in html
        //code displayed by changing the innerText of the 
};

