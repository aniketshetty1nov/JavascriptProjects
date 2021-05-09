const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// keep Track of Current card
let currentActiveCard = 0;

//store DOM cards 
const cardEl = [];

//store Card Data
const cardsData = getCardsData();
// const cardsData = [{
//             question: 'what must a variables begin with?',
//             answer: 'A letter, $ or _'

//       },
//       {
//             question: 'what is a variable?',
//             answer: 'Container for a piece of data'
//       },
//       {
//             question: 'Example of Case Sensitive Variable',
//             answer: 'This Is A Variable'
//       }
// ];






//create all cards
function createCards() {
      cardsData.forEach((data, index) => createCard(data, index));
}

//Create a single card in DOM
function createCard(data, index) {
      const card = document.createElement('div');
      card.classList.add('card');

      if (index === 0) {
            card.classList.add('active');
      }

      card.innerHTML = `
       <div class="inner-card">
            <div class="inner-card-front">
                  <p>
                    ${data.question}
                  </p>
             </div>  
            <div class="inner-card-back">
                  <p>
                    ${data.answer}
                  </p>
             </div>

      </div>                                                                                                                                                                                  
      `;

      card.addEventListener('click', () => card.classList.toggle('show-answer'));

      // Add to DOM Cards
      cardEl.push(card);
      // console.log(card);
      // console.log(cardEl);

      cardsContainer.appendChild(card);
      updateCurrentText();

}

//Show no. of cards
function updateCurrentText() {
      currentEl.innerText = `${currentActiveCard + 1}/${cardEl.length}`;
}

//Get Cards from Local Storage
function getCardsData() {
      const cards = JSON.parse(localStorage.getItem('cards'));
      return cards === null ? [] : cards;
}

//Set Card to loacl storage
function setCardsData(cards) {
      localStorage.setItem('cards', JSON.stringify(cards));
      window.location.reload();
}


createCards();

// Event Listners


//Next BTn
nextBtn.addEventListener('click', () => {
      cardEl[currentActiveCard].className = 'card left';

      currentActiveCard = currentActiveCard + 1;

      if (currentActiveCard > cardEl.length - 1) {

            currentActiveCard = cardEl.length - 1;

      }

      cardEl[currentActiveCard].className = 'card active';

      updateCurrentText();


});

//Prev btn
prevBtn.addEventListener('click', () => {
      cardEl[currentActiveCard].className = 'card right';

      currentActiveCard = currentActiveCard - 1;

      if (currentActiveCard < 0) {

            currentActiveCard = 0;

      }

      cardEl[currentActiveCard].className = 'card active';

      updateCurrentText();


});



//Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
//Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

//Add new Card
addCardBtn.addEventListener('click', () => {
      const question = questionEl.value;
      const answer = answerEl.value;
      // console.log(question,answer)

      if (question.trim() && answer.trim()) {
            const newCard = {
                  question,
                  answer
            }
            console.log(newCard)

            createCard(newCard);

            questionEl.value = '';
            answerEl.value = '';

            addContainer.classList.remove('show');

            cardsData.push(newCard);

            setCardsData(cardsData);
      }
});



// Clear Cards
clearBtn.addEventListener('click', () => {
      localStorage.clear();
      cardsContainer.innerHTML = '';
      window.location.reload();
});