function setUpGame(){

    // reset the keypad 
   
    let onScreenKeyboard = 
        document.querySelectorAll("#keypad tr td");

    for (const keyToReset of onScreenKeyboard) {

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