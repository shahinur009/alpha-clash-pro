// function play (){
//     // hide home screen
//     const homeScreen =document.getElementById('home')
//     homeScreen.classList.add('hidden')
//     // show play ground section click button
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     // console.log(homeScreen.classList)
// } 

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('player pressed',playerPressed)

    // game over section
    if(playerPressed ==='Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // ..................................................//
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // // update current Score
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore)
        // // increase the score by 1
        // const newScore =currentScore + 1;
        // // set new score in the Inner text.
        // currentScoreElement.innerText = newScore;

        // console.log ('you got a point', expectedAlphabet);
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife)

        if(updateLife === 0){
            gameOver();
        }
        // .................................................................
        // get the current life line.
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // reduce the life line
        // const newLife = currentLife + 1;
        // // display the update life line. 
        // currentLifeElement.innerText = newLife
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabets = getARandomAlphabet()
    // console.log(alphabets)
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabets;
    setBackgroundColorById(alphabets);
}


function play(){
    // hide everything show only play ground
    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset life and score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // update score
    // 1- get final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selector
    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet)
}