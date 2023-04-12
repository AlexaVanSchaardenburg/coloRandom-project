//Data Model
var savedPalettes = [];
var currentPalette = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button');
var savePaletteButton = document.querySelector('#save-palette-button');
var boxes = document.querySelectorAll('.box');
var hexColors = document.querySelectorAll('.item-wrapper p');
var savedPalettesSection = document.querySelector('.saved-palettes');
var savedDescription = document.querySelector('.saved-descriptor');

//Event Listeners
generateRandomButton.addEventListener('click', displayPalette);
window.addEventListener('load', displayPalette);
boxes.forEach(node => node.addEventListener('click', toggleLock));
savePaletteButton.addEventListener('click', displaySavedPalettes);

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
    if (!currentPalette.length) {
        var colorPalette = [];
        for (var i=0; colorPalette.length<5; i++){
            colorPalette.push(generateRandomHex())
        }
        currentPalette = colorPalette;
        return colorPalette;
    } else {
        for (var i = 0; i < 5; i++) {
            var id = `unlock${i}`;
            var unlockIcon = document.getElementById(id);    
            var islocked = unlockIcon.classList.contains('hidden');
            if (!islocked) {
                var newHex = generateRandomHex()
                currentPalette.splice(i, 1, newHex);
            } 
        }
    }
  };

function displayPalette() {
    generateRandomPalette();
    for (var i = 0; i < hexColors.length; i++) {
        boxes[i].style.setProperty("background-color", currentPalette[i]);
        hexColors[i].innerText = currentPalette[i];
    }
}

// Pseudocode for save palettes functionality

// steps:
   // create a `Save Palette` button (HTML), matching the style of the `New Palette` button(CSS)
       // We can give it the same class as the `New Palette` button for styling
   // create a new section in the HTML to display the saved palettes on the right hand side of the page
       // if there are no saved palettes, display should say “No saved palettes yet!”
       // style the saved palettes section to match the comp
   // create a new variable that is equal to an empty array(data model) for the saved palettes
   // query select necessary elements from HTML
   // add an event listener to the `Save Palette` button
   // add a function displaySavedPalettes
       // save(push) the current color palette to the data model
       // adds the saved palettes to the DOM (innerHTML)
       // hides the message “No saved palettes yet!”

function displaySavedPalettes() {
    savedPalettesSection.classList.remove('hidden');
    if (!savedPalettes === []) {
        savedDescription.classList.add('hidden');
    }
    savePalette();
 }; 

function savePalette() {
    if (!savedPalettes.includes(currentPalette)) {
            savedPalettes.push(currentPalette);
            console.log(savedPalettes);
    }
};