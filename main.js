//Generating ranodm palette

// GOAL:
// when page loads, is refreshed or button is clicked generate random color palette


//Psuedo Code:
//Data model = colors and color palettes --- colorHexs = array colorPalettes = array of arrays
var colorPalettes = [];
var generateRandomButton = document.querySelector('#generate-random-button')

    //Make Button
    //HTML --> 
    <button id="generate-random-button"> New Palette</button>
        //CSS --> use border-radius: 0% 30% - play with 30% to change it until it fits
        button {
    border - radius: 0 % 30 %;
    color: white;
    background: black;
}
//Event Listener --> listens for click on generateRandomButton and invoke generateRandomPalette function
generateRandomButton.addEventListener('click', generateRandomPalette);

//Generating random hex codes 
// function generateRandomHex() {
//     // generate random digit that is a num or letter - need something to randomly return one value or another (boolean would be ideal)
//     var hexCharacters = []
//     // iterate over the if else 6 times to create array with length of 6
//     for (var i = 0; hexCharacters.length < 7; i++) {
//         // if true generate num if false generate letter
//         //using math.random if num is greater than 0.5 then true else false
//         var trueOrFalse = Math.random()
//         if (trueOrFalse > 0.5) {
//             //generates random num between 0 and 9
//             hexCharacters.push(Math.floor(Math.random() * 9))
//         } else {
//             //generates random character from array of letters
//             var letters = ['A', 'B', 'C', 'D', 'E', 'F']
//             var indexNum = Math.floor(Math.random() *5)
//             hexCharacters.push(letters[indexNum])
//         }
//     }
//     hexCode = `#${hexCharacters.join('')}`
//     return hexCode
// };

//refactored fucntion generateRandomHex to use generate all charcaters from one 

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
    //create array that is color palette
    var colorPalette = []
    //invoke generateRandomHex function 5x and push into colorPalette array (look for DRYer way to do this)
    for (var i=0; colorPalette.length<5; i++){
        colorPalette.push(generateRandomHex())
    }
    //push that new array into the colorPalettes array to save palette in data model
    colorPalettes.push(colorPalette)
    //invoke displayPalette
    displayPalette()
    return colorPalette
};

//Change boxes to generated colors & change text below boxes to generated hex
function displayPalette() {
    //display array in html
};

