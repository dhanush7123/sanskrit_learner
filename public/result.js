// result.js
document.addEventListener("DOMContentLoaded", () => {
    const score = localStorage.getItem("quizScore") || 0;
    document.getElementById("score-display").textContent = `${score} / 10`;
  });
  