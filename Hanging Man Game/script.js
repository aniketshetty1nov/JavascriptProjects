const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const LaterBtn = document.getElementById('later');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');
console.log(figureParts)
const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)]

// console.log(Math.floor(Math.random() * 1 ));

const correctLetters = [];
const wrongLetters = [];


// show Hidden Word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
            .split('')
            .map(letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
       </span>
        ` )
            .join('')
        }`;

    const innerword = wordEl.innerText.replace(/\n/g, '');
    // console.log(wordEl.innerText, innerword);    
    if (innerword === selectedWord) {
        finalMessage.innerText = 'Congratulations!  You won! :) '
        popup.style.display = 'flex';
    }
}

displayWord();

// Update the Wrong letters

function updateWrongLettersEl(){

        //Display wrong letters
  wrongLetterEl.innerHTML = `
  ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
  ${wrongLetters.map(letter => `<span>${letter}</span>`)}

  `;

         //Display Figure parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if(index < errors){
        console.log(part)
        part.style.display = "block";
    }
    else{
        part.style.display  = "none";
    }

  });

  
        //check if lost
if (wrongLetters.length === figureParts.length){
    finalMessage.innerText = 'Unfortunately You lost';
    popup.style.display = 'flex';
}


}


//show notification
function showNotification(){
    // console.log('Show Notification')
        notification.classList.add('show');

    
    setTimeout(()=>{
        notification.classList.remove('show');

    },2000)

}


// console.log(selectedWord.split(''))






//keydown letter press
window.addEventListener('keydown', e => {

    // console.log(e);


    var arr_alphabets_A_Z = String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
    // console.log(arr_alphabets_A_Z.split('').includes(e.key))
    if (arr_alphabets_A_Z.split('').includes(e.key.toUpperCase())) {
        // console.log("done");
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord()
            }
            else {
                showNotification();

            }

        }
        else {
          
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            }
            else {
                showNotification();
            }


        }


    }





});


//Restart game and play again
playAgainBtn.addEventListener('click',() =>{
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)]
    displayWord();

    updateWrongLettersEl();

    popup.style.display ='none';

});   