// 🟡 Load Word of the Day
fetch('/api/word')
  .then(res => res.json())
  .then(data => {
    document.getElementById('sanskrit-word').textContent = data.sanskrit;
    document.getElementById('meaning').textContent = data.meaning;
    document.getElementById('audio-player').src = data.audio;
  });

// 🟡 Load Quiz
let correctAnswers = {};
function loadQuiz() {
  fetch('/api/quiz')
    .then(res => res.json())
    .then(questions => {
      const container = document.getElementById('quiz-container');
      container.innerHTML = '';

      questions.forEach((q, idx) => {
        const qDiv = document.createElement('div');
        qDiv.innerHTML = `<p><strong>Q${idx + 1}:</strong> ${q.question}</p>`;

        q.options.forEach(opt => {
          qDiv.innerHTML += `
            <label>
              <input type="radio" name="q${idx}" value="${opt}"> ${opt}
            </label><br>`;
        });

        correctAnswers[`q${idx}`] = q.answer;
        container.appendChild(qDiv);
      });
    });
}

loadQuiz();

// 🟡 Submit Quiz
function submitQuiz() {
  let score = 0;
  let total = Object.keys(correctAnswers).length;

  for (let qid in correctAnswers) {
    const selected = document.querySelector(`input[name="${qid}"]:checked`);
    if (selected && selected.value === correctAnswers[qid]) {
      score++;
    }
  }

  alert(`You scored ${score} out of ${total}`);

  // 🟡 Save progress to backend
  fetch('/api/progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'guest', score })
  });
}

