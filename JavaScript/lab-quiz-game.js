
const questions= [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "Which is the largest continent on Earth?",
    choices: ["Africa", "Asia", "Europe"],
    answer: "Asia"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Sports",
    question: "How many players are on a standard soccer team on the field?",
    choices: ["9", "10", "11"],
    answer: "11"
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Markdown Language",
    ],
    answer: "Hyper Text Markup Language"
  }
];

const getRandomQuestion=(arr)=> {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomComputerChoice=(arr)=> {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getResults=(obj,choice)=> {
  if (choice==obj.answer) {
    return "The computer's choice is correct!";
  } 
  else {
    return `The computer's choice is wrong. The correct answer is: ${obj.answer}`;
  }
}



