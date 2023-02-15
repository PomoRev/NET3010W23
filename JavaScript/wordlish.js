// global variables

let currentLetter;

function keyBind(element) {
    currentLetter = element.innerText;
    alert( "from screen " + currentLetter);
}

function keyPress(event){
    currentLetter = event.key;
    alert( "from keyboard " + currentLetter);
}

function setUpGame(){

    // prepare to receive input from keyboard

    document.removeEventListener('keydown', keyPress);
    document.addEventListener('keydown', keyPress);

    // reset the keypad 
   
    let onScreenKeyboard = 
        document.querySelectorAll("#keypad tr td");

    for (const keyToReset of onScreenKeyboard) {

        // clear out old instance of listener

        keyToReset.removeEventListener('onclick', keyBind);

        // restore keypad element to original state

        keyToReset.style.color = "var(--interface-text)";
        keyToReset.addEventListener('onclick', keyBind);
        
    }

    // clear gameboard

    let gameBoard = 
        document.querySelectorAll("#gameboard tr td");

    for (const boxToClear of gameBoard) {
        boxToClear.innerText = "";
    }

    // clear feedback

    feedbacktext.innerText = ""; 

    // setup environment
    //     choose and remember target word from list
    //     set line to first line
    //     set guess to empty string

}

setUpGame();

