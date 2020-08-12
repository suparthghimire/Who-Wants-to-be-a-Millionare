let questions_easy = [
  {
    question: "Which of these is an Input Device?",
    answer: "Mouse",
    options: ["Monitor", "Mouse", "Projector", "Speaker"],
    asked: false,
  },
  {
    question: "Which of these is an Output Device?",
    answer: "Speaker",
    options: ["Keyboard", "Mouse", "Microphone", "Speaker"],
    asked: false,
    difficulty: "easy",
  },
  
  {
    question: "Which of these is not a part of Traditional Computer?",
    answer: "Paper",
    options: ["Memory", "Display", "Paper", "Motherboard"],
    asked: false,
  },
  {
    question: "Who is known as the Father of Computer Science?",
    answer: "Charles Babbage",
    options: ["Charles Babbage", "Barak Obama", "Rajesh Hamal", "KP Oli"],
    asked: false,
  },
  {
    question: "Who was the Founder of the company Apple?",
    answer: "Steve Jobs and Steve Wozniak",
    options: [
      "Stan Lee and Jack Kirby",
      "Barak Obama and Michhele Obama",
      "Steve Jobs and Steve Wozniak",
      "KP Oli and Prachanda",
    ],
    asked: false,
  },
  {
    question: "Who was the Founder of the Linux?",
    answer: "Linus Trovalds",
    options: [
      "Linus Trovalds",
      "Bill Gates",
      "Mark Zukerberd",
      "Rajesh Hamal",
    ],
    asked: false,
  },
];
let questions_medium = [
  {
    question: "Who deveopled the C language?",
    answer: "Dennis Ritchie",
    options: ["Bill Gates", "Dennis Ritchie", "Steve Wozniak", "Sundar Pichai"],
    asked: false,
  },

  {
    question: "Who is the current CEO of Microsoft?",
    answer: "Satya Nadela",
    options: ["Satya Nadela", "Sundar Pichai", "Jeff Besoz", "Tim Cook"],
    asked: false,
  },
  {
    question: "Which of these is true?",
    answer: "Google was founded in a Garage",
    options: [
      "Google was founded in a Garage",
      "Facebook was Original Idea of Mark Zukerberg",
      "Steve Jobs was always the CEO of Apple",
      "Facebook Created Instagram",
    ],
    asked: false,
  },

  {
    question: "Who was the developer of World Wide Web?",
    answer: "Tim Bernes Lee",
    options: [
      "Barak Obama",
      "Dennis Ritchie",
      "Linux Trovalds",
      "Tim Bernes Lee",
    ],
    asked: false,
  },
  {
    question: "Which of these is true?",
    answer: "Laravel is PHP framework",
    options: [
      "Django is JAVA framework",
      "Laravel is PHP framework",
      "Flask is a framework of C#",
      "Tenserflow is not released in JavaScript Format",
    ],
    asked: false,
  },
];
let questions_hard = [
  {
    question: "Which of these is correct?",
    answer: "int* var;",
    options: ["int var*", "i*nt var;", "int* var", "All of the Above"],
    asked: false,
  },
  {
    question: "Complete the Sentence: Java is a ____",
    answer: "OOP Based Language",
    options: [
      "OOP Based Language",
      "Scripting Language",
      "Procedural Language",
      "Markup Language",
    ],
    asked: false,
  },

  {
    question: "Which of these is Correct Syntax",
    answer: "(condition) ? True Statement : False Statement",
    options: [
      "(condition) ? True Statement : False Statement",
      "(condition) ? False Statement : True Statement",
      "(True Statement) ? Condition : False Statement",
      "(condition) ? True Statement : True Statement",
    ],
    asked: false,
  },

  {
    question: "Which of these represents Stack Data Structre",
    answer: "First In Last Out",
    options: [
      "Last In Last Out",
      "First In Last Out",
      "None of the Above",
      "Both A and B",
    ],
    asked: false,
  },

  {
    question: "What does int* num mean?",
    answer: "The variable num can store address that contains integer value",
    options: [
      "The variable num can integer value",
      "The variable num can store address that contains integer value",
      "The variable num cannot store address that contains integer value",
      "The variable num can store any kind of data",
    ],
    asked: false,
  },
];

let prizes = [
  '100','200','300','400','800','1600',
  '10,000','20,000','40,000','80,000','1,60,000',
  '3,20,000','6,40,000','15,00,000','50,00,000','1 Cr'
];

let checkpoints = [
  '1600',
  '1,60,000',
  '1 Cr'
];

// const selectors
const questionAnswer = document.querySelector(".question-answer");
const qaContainer = document.querySelector(".qa-container");
const point = document.querySelectorAll('.point');
const point_rev = [...point].reverse();


// end of const selectors

// let global variables
let score = -1;
// end of let cariables

init();
function init(){
  removeChildContainer(qaContainer);
  createQuestion();
}

function createQuestion(){
  let question = determineQuestion();
  console.log(question);
  if(question.asked){
    createQuestion();
  }
  else{
    question.asked = true;
    console.log(question);
    let question_div = document.createElement('div');
    question_div.classList.add('question');
    question_div.innerHTML = question.question;

    let option_div = document.createElement('div');
    option_div.classList.add('options');
    for(let i=0;i<question.options.length;i++){
      let option = document.createElement('button');
      option.classList.add('opt');
      option.innerHTML = `${question.options[i]}`;
      option_div.appendChild(option);
    }

    qaContainer.appendChild(question_div);
    qaContainer.appendChild(option_div);

    if(checkWin())
      gameOver(true);

    else
      handleInput(question.answer);

  }

}

function checkWin(){
  return score>=14?true:false;
}

function handleInput(answer){
  document.querySelectorAll('.opt').forEach(option=>{
    option.addEventListener('click',()=>{
      if(checkAnswer(answer,option.innerHTML))
      {
        score++;
        console.log(score);
        fillPointTable();
        setTimeout(()=>{
          setTimeout(init,1000)
          option.classList.add('point-won');
        },2000)
      }
      else{
        gameOver(false);
      }
    })
  });
}


function fillPointTable(){
  if(score == parseInt(point_rev[score].getAttribute('data'))){
    point_rev[score].classList.add('point-won');
  }
}

function checkAnswer(answer,user_input){
  return answer === user_input ? true:false;
}

function determineQuestion(){
  
  if(score<=4){
    return questions_easy[Math.floor(Math.random()*questions_easy.length)];
  }
  else if(score>4 && score<=9){
    return questions_medium[Math.floor(Math.random()*questions_medium.length)];
  }
  else if(score>9 && score<=14){
    return questions_hard[Math.floor(Math.random()*questions_hard.length)];
  }
  
}


function removeChildContainer(parent) {
  
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function gameOver(status){
  if(status)
    console.log('Congratulations! You Won!');
  else
    console.log('You Lost! Score: '+score);
}
