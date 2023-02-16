// global variables

function keyBind(letter) {
    alert("boo " + letter);
}

function keyPress(event){
    keyBind(event.key.toUpperCase());
}

function setUpGame(){

    // prepare to receive input from keyboard

    document.removeEventListener('keydown', keyPress);
    document.addEventListener('keydown', keyPress);

    // reset the keypad 
   
    let onScreenKeyboard = 
        document.querySelectorAll("#keypad tr td");

    for (const keyToReset of onScreenKeyboard) {

        // restore keypad element to original state

        keyToReset.style.color = "var(--interface-text)";

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

