//Data Model
var savedPalettes = [];
var currentPalette = [];

//Variables
var generateRandomButton = document.querySelector('#generate-random-button');
var savePaletteButton = document.querySelector('#save-palette-button');
var boxes = document.querySelectorAll('.box');
var hexColors = document.querySelectorAll('.item-wrapper p');
var savedPalettesSection = document.querySelector('.saved-palettes-section');
var savedColors = document.querySelector('.saved-palettes');

//Event Listeners
generateRandomButton.addEventListener('click', displayRandomPalette);
window.addEventListener('load', displayRandomPalette);
boxes.forEach(node => node.addEventListener('click', toggleLock));
savePaletteButton.addEventListener('click', savePalette);

savedPalettesSection.addEventListener('click', function (e) {
    if (e.target.classList.contains("delete-button")) {
        for (var i = 0; i < savedPalettes.length; i++) {
            var index = findIndex(e.target.id, savedPalettes);
            if (index !== -1) {
                savedPalettes.splice(index, 1);
            }
        }
    }
    if (e.target.classList.contains('small-box')) {
        var deleteButtonId = e.target.parentElement.lastElementChild.id;
        var index = findIndex(deleteButtonId, savedPalettes);
        var paletteHolder = [];
        for (var i = 0; i < 5; i++) {
            paletteHolder[i] = savedPalettes[index][i];
        }
        currentPalette = paletteHolder;

        resetToUnlock(boxes);
        displayPalette();
    }
    displaySaved();
});

//Functions
function findIndex(str, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toString() === str) {
            return i;
        } 
    }
    return -1;
}

function resetToUnlock(boxes) {
    boxes.forEach(element => {
        element.firstElementChild.classList.remove('hidden');
        element.lastElementChild.classList.add('hidden');
    })
}

function toggleLock(event) {
    if (event.target.nodeName === 'IMG') {
        event.currentTarget.firstElementChild.classList.toggle('hidden');
        event.currentTarget.lastElementChild.classList.toggle('hidden');
    }
};

function generateRandomHex() {
    var hexCharacters = [];
    for (var i = 0; hexCharacters.length < 6; i++) {
        var characters = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9];
        indexNum = Math.floor(Math.random() * 14);
        hexCharacters.push(characters[indexNum]);
    }
    hexCode = `#${hexCharacters.join('')}`;
    return hexCode;
};

function generateRandomPalette() {
    if (!currentPalette.length) {
        var colorPalette = [];
        for (var i = 1; colorPalette.length < 5; i++) {
            colorPalette.push(generateRandomHex());
        }
        currentPalette = colorPalette;
    } else {
        for (var i = 0; i < 5; i++) {
            var id = `unlock${i}`;
            var unlockIcon = document.getElementById(id);
            var islocked = unlockIcon.classList.contains('hidden');
            if (!islocked) {
                var newHex = generateRandomHex();
                currentPalette.splice(i, 1, newHex);
            }
        }
    }
};

function displayRandomPalette() {
    generateRandomPalette();
    displayPalette();
};

function displayPalette() {
    for (var i = 0; i < 5; i++) {
        boxes[i].style.setProperty("background-color", currentPalette[i]);
        hexColors[i].innerText = currentPalette[i];
    }
}

function displaySaved() {
    savedColors.innerHTML = '';
    if (!savedPalettes.length) {
        savedColors.innerHTML = `No saved palettes yet!`
    } else {
        for (var i = 0; i < savedPalettes.length; i++) {
            savedColors.innerHTML += `<section class="color-palettes">
                    <article class="box small-box", style="background-color: ${savedPalettes[i][0]}", id="colored-box-1">
                          </article>
                    <article class="box small-box", style="background-color: ${savedPalettes[i][1]}", id="colored-box-2">
                          </article>
                    <article class="box small-box", style="background-color: ${savedPalettes[i][2]}", id="colored-box-3">
                          </article>
                    <article class="box small-box", style="background-color: ${savedPalettes[i][3]}", id="colored-box-4">
                          </article>
                    <article class="box small-box", style="background-color: ${savedPalettes[i][4]}", id="colored-box-5">
                          </article>
                    <img src="./assets/delete.png" class="small-box delete-button" id = ${savedPalettes[i]}>
                  </section>`
        }
    }
};

function savePalette() {
    var paletteToPush = currentPalette.slice();

    if (!savedPalettes.some(element => element.toString() === currentPalette.toString())) {
        savedPalettes.push(paletteToPush);
    }

    displaySaved();
};

