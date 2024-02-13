// function play (){
//     // hide home screen
//     const homeScreen =document.getElementById('home')
//     homeScreen.classList.add('hidden')
//     // show play ground section click button
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
//     // console.log(homeScreen.classList)
// } 
function continueGame(){
    const alphabets = getARandomAlphabet()
    // console.log(alphabets)
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabets;
    setBackgroundColorById(alphabets);
}


function play(){
    hideElementById('home')
    showElementById('play-ground')
    continueGame();
}