//Data Model
var savedPalettes = [];
var currentPalette = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button');
var savePaletteButton = document.querySelector('#save-palette-button');
var boxes = document.querySelectorAll('.box');
var hexColors = document.querySelectorAll('.item-wrapper p');
var savedPalettesSection = document.querySelector('.saved-palettes-section');
var savedDescription = document.querySelector('.saved-palettes');

//Event Listeners
generateRandomButton.addEventListener('click', displayPalette);
window.addEventListener('load', displayPalette);
boxes.forEach(node => node.addEventListener('click', toggleLock));
savePaletteButton.addEventListener('click', displaySaved);

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

function displaySavedPalettes() {
    savedPalettesSection.classList.remove('hidden');
    if (!savedPalettes === []) {
        savedDescription.classList.add('hidden');
    }
    savePalette();
 }; 

 function displaySaved() {
    savedColors.innerHTML = '';
    if (savedPalettes === []){
      savedColors.innerHTML = `<p class="saved-descriptor">No saved palettes yet!</p>`
    } else {
      for (var i=0; i<savedPalettes.length; i++){
        savedColors.innerHTML += `<section class="color-palettes">
                <article class="box", style="background-color: ${savedPalettes[i][0]}", id="colored-box-1">
                      </article>
                <article class="box", style="background-color: ${savedPalettes[i][1]}", id="colored-box-2">
                      </article>
                <article class="box", style="background-color: ${savedPalettes[i][2]}", id="colored-box-3">
                      </article>
                <article class="box", style="background-color: ${savedPalettes[i][3]}", id="colored-box-4">
                      </article>
                <article class="box", style="background-color: ${savedPalettes[i][4]}", id="colored-box-5">
                      </article>
              </section>`
        }
    }
 };

function savePalette() {
    if (!savedPalettes.includes(currentPalette)) {
            savedPalettes.push(currentPalette);
            console.log(savedPalettes);
    }
};