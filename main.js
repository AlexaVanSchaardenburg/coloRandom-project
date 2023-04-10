//Generating ranodm palette

// GOAL:
// when page loads, is refreshed or button is clicked generate random color palette


//Psuedo Code:
//Data model = colors and color palettes --- colorHexs = array colorPalettes = array of arrays
var colorHexs = [];
var colorPalettes = [];
var generateRandomButton = document.querySelector('#generate-random-button')

//Make Button
    //HTML --> 
        <button id="generate-random-button">New Palette</button>
    //CSS --> use border-radius: 0% 30% - play with 30% to change it until it fits
        button {
          border-radius: 0% 30%;
          color: white;
          background: black;
        }
    //Event Listener --> listens for click on generateRandomButton and invoke generateRandomPalette function
        generateRandomButton.addEventListener('click', generateRandomPalette);

//Generating random hex codes 
    function generateRandomHex(){
        // 1) generate random digit that is a num or letter - need something to randomly return one value or another (boolean would be ideal)
            //using math.random if num is greater than 0.5 then true else false
        var trueOrFalse = Math.random()
        var character;
        // 2) if num(true) generate num between 0-9 if letter(false) generate letter a,b c, d, e, or f
        if(trueOrFalse > 0.5){
            //generates random num between 0 and 9
            character = Math.floor(Math.random()*9)
        } else {
            //generates random character from array of letters
            var letters = ['a','b','c','d','e','f']
            var indexNum = Math.floor(Math.random)*5
            character = letters[indexNum]
        }
        // 3) combine the 6 randomly generated nums into one string
    };


//Generate random color palette function
        function generateRandomPalette(){
            //create array that is color palette
            var colorPalette = []
            //invoke generateRandomHex function 5x and push into colorPalette array (look for DRYer way to do this)
            colorPalette.push(generateRandomHex())
            colorPalette.push(generateRandomHex())
            colorPalette.push(generateRandomHex())
            colorPalette.push(generateRandomHex())
            colorPalette.push(generateRandomHex())
            //push that new array into the colorPalettes array to save palette in data model
            colorPalettes.push(colorPalette)
            //invoke displayPalette
            displayPalette()
        };

//Change boxes to generated colors & change text below boxes to generated hex
        function displayPalette(){
            //display array in html
        };

