//Data Model
var colorPalettes = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button');
var boxes = document.querySelectorAll('.box');
var hexColors = document.querySelectorAll('.box p');

//Event Listeners
generateRandomButton.addEventListener('click', displayPalette);
window.addEventListener('load', displayPalette);
boxes.forEach(node => node.addEventListener('click', toggleLock));

//Functions
function toggleLock(event) {
    if (event.target.nodeName === 'IMG') {
      event.currentTarget.firstElementChild.classList.toggle('hidden');
      event.currentTarget.lastElementChild.classList.toggle('hidden');
    }
}

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

/**
 * When the page is initially loaded, 
 * all colors should have an unlocked icon in the bottom right corner
 *  - CSS: make box a flex container, flex-end * 2; change p
 *  - HTML: make img unlocked and locked the children of box, with differnt class name
 * 
 * When a user clicks on the unlocked icon, a locked icon should appear; 
 * The locked/unlocked icons should toggle back and forth as the user clicks them
 *  - HTML + CSS: add class hidden
 *  - add event listener, classList.toggle("hidden") 
 * 
 * When the New Palette button is clicked, 
 * only the unlocked colors should change; Locked colors should remain
 * - modify genearteRandom
 *  - add if/else statement there
 *
 *  - if/else statement, 
    *  - if unlocked (if event.target.classList.contains("unlocked"))
    *   - provide ids of the unlocked items
    *   - call generateRandomPalette
    *   
 * 
 * When the palette is updated, your Data Model should be updated too 
    *  -  modify function displayPalette
    *   - only reassign values to the ones with unlocked item
 * 
 * */

