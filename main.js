//Data Model
var colorPalettes = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button');
var box1 = document.querySelector('#colored-box-1');
var box2 = document.querySelector('#colored-box-2');
var box3 = document.querySelector('#colored-box-3');
var box4 = document.querySelector('#colored-box-4');
var box5 = document.querySelector('#colored-box-5');
var hexCode1 = document.querySelector('#color-1');
var hexCode2 = document.querySelector('#color-2');
var hexCode3 = document.querySelector('#color-3');
var hexCode4 = document.querySelector('#color-4');
var hexCode5 = document.querySelector('#color-5');

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
    //display colors in boxes
        //Declare 5 vars that are the boxes 
        //use .style.background to set color to hex code
    //display hex code numbers under boxes
        //update the innertext of p elments by theuir id num (use query selectro to make them vars)
};

