const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: './img/drink.jpg',
    text: "i am a Thirsty"

  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];


// Create Function createBox
data.forEach(createBox);

//create speech box
function createBox(item) {
  console.log(item)
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');
  box.innerHTML = `
            <img src="${image}" alt="${text}" />
            <p class="info">${text} </p>
         ` ;

  //@todo speak event
  box.addEventListener('click', () => {
    setTextMessage(text);   
    speakText();
 
    //ADD an active Effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 1000);



  });


 


  main.appendChild(box);

}
 //Init Speech synth   
 const message = new SpeechSynthesisUtterance();

//store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}


//Set Text
function setTextMessage(text) {
  message.text = text;

}

//speak text 
function speakText() {
  speechSynthesis.speak(message);
}


//set  Voice
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value)
}


//voices Changed
speechSynthesis.addEventListener('voiceschanged', getVoices);


//toggle Text Box
toggleBtn.addEventListener('click', () => {
  document.getElementById('text-box')
    .classList.toggle('show')
});

//Close button
closeBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.remove('show')

});


//Change Voice
voicesSelect.addEventListener('change',setVoice);
 
//Read Text
readBtn.addEventListener('click',() =>{
  setTextMessage(textarea.value);
  speakText();
});


getVoices();


