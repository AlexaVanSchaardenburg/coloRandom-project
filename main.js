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
generateRandomButton.addEventListener('click', displayPalette);

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
    return colorPalette
};

//Change boxes to generated colors & change text below boxes to generated hex
function displayPalette() {
    var currentPalette = generateRandomPalette()
    //display array in html
    //display colors in boxes
        //Declare 5 vars that are the boxes 
        //use .style.background to set color to hex code
    //display hex code numbers under boxes
        //update the innertext of p elments by theuir id num (use query selectro to make them vars)
    //color 1
    hexCode1.innerText = `${currentPalette[0]}`
    box1.style.backgroundColor = currentPalette[0]
    console.log(currentPalette[0])
    //color 2
    hexCode2.innerText = `${currentPalette[1]}`
    box2.style.color = currentPalette[1]
    //color 3
    hexCode3.innerText = `${currentPalette[2]}`
    box3.style.color = currentPalette[2]
    //color 4
    hexCode4.innerText = `${currentPalette[3]}`
    box4.style.background = currentPalette[3]
    //color 5
    hexCode5.innerText = `${currentPalette[4]}`
    box5.style.color = currentPalette[4]
};

