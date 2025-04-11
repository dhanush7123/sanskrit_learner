const fullQuizSet = [
  { question: "What is the Sanskrit word for 'Mother'?", options: ["माता", "पिता", "गृहः", "बालकः"], answer: "माता" },
  { question: "What does 'गृहः' mean?", options: ["Boy", "House", "Water", "Sun"], answer: "House" },
  { question: "What is the meaning of 'कृषकः'?", options: ["Teacher", "King", "Farmer", "Student"], answer: "Farmer" },
  { question: "Translate 'River' to Sanskrit.", options: ["नदी", "वनम्", "गजः", "कूपः"], answer: "नदी" },
  { question: "What does 'गजः' mean?", options: ["Tiger", "Elephant", "Bird", "Fish"], answer: "Elephant" },
  { question: "Translate 'Student' to Sanskrit.", options: ["शिष्यः", "राजा", "बालकः", "माता"], answer: "शिष्यः" },
  { question: "What does 'अश्वः' mean?", options: ["Horse", "Bird", "Snake", "Fire"], answer: "Horse" },
  { question: "What is the Sanskrit word for 'Sky'?", options: ["गगनम्", "भूमिः", "वनम्", "अग्निः"], answer: "गगनम्" },
  { question: "What does 'सूर्यः' refer to?", options: ["Sun", "Moon", "Star", "Fire"], answer: "Sun" },
  { question: "Translate 'Tree' to Sanskrit.", options: ["वृक्षः", "गजः", "पुस्तकम्", "नदी"], answer: "वृक्षः" },
  { question: "What is the Sanskrit word for 'Fire'?", options: ["अग्निः", "जलम्", "अश्वः", "शब्दः"], answer: "अग्निः" },
  { question: "What does 'जलम्' mean?", options: ["Water", "Wind", "Sun", "Earth"], answer: "Water" },
  { question: "Translate 'King' to Sanskrit.", options: ["राजा", "माता", "पिता", "शिष्यः"], answer: "राजा" },
  { question: "What is the Sanskrit word for 'Book'?", options: ["पुस्तकम्", "वृक्षः", "फलम्", "नदी"], answer: "पुस्तकम्" },
  { question: "What does 'फलम्' refer to?", options: ["Fruit", "Flower", "Fire", "Water"], answer: "Fruit" },
  { question: "Translate 'Boy' to Sanskrit.", options: ["बालकः", "राजा", "वृक्षः", "गजः"], answer: "बालकः" },
  { question: "What does 'वनम्' mean?", options: ["Forest", "House", "Cloud", "Mountain"], answer: "Forest" },
  { question: "Translate 'Teacher' to Sanskrit.", options: ["अध्यापकः", "शिष्यः", "राजा", "माता"], answer: "अध्यापकः" },
  { question: "What is the Sanskrit word for 'Wind'?", options: ["वायुः", "जलम्", "सूर्यः", "गगनम्"], answer: "वायुः" },
  { question: "What does 'शब्दः' mean?", options: ["Sound", "Book", "Horse", "Fruit"], answer: "Sound" }
];

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}

const quizSet = shuffle(fullQuizSet).slice(0, 5);

let current = 0;
let selectedAnswers = [];

function showQuestion(index) {
  const q = quizSet[index];
  document.getElementById("question-box").innerText = `Q${index + 1}. ${q.question}`;
  const optionsBox = document.getElementById("options-box");
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    const baseStyle = "block w-full max-w-xs mx-auto py-2 px-4 border-2 rounded-xl transition";
    const selected = selectedAnswers[index] === opt;
    
    btn.className = selected 
      ? `${baseStyle} bg-orange-600 text-white border-orange-800` 
      : `${baseStyle} bg-white text-orange-900 border-orange-300 hover:bg-orange-100`;

    btn.onclick = () => {
      selectedAnswers[index] = opt;
      showQuestion(index); // refresh to apply new highlight
    };

    optionsBox.appendChild(btn);
  });

  // Update next/submit button
  document.getElementById("next-btn").innerText = (index === quizSet.length - 1) ? "Submit" : "Next";
}

function nextQuestion() {
  if (!selectedAnswers[current]) {
    alert("Please select an option before continuing.");
    return;
  }
  current++;
  if (current < quizSet.length) {
    showQuestion(current);
  } else {
    calculateScore();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    showQuestion(current);
  }
}

function calculateScore() {
  let score = 0;
  quizSet.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) score += 2;
  });
  localStorage.setItem("quizScore", score);
  window.location.href = "result.html";
}

window.onload = () => showQuestion(current);
