document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
  
    // Password validation: Minimum 8 characters, one uppercase, one special char, and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
    if (!passwordRegex.test(password)) {
      error.textContent = "Password must be 8+ chars, include 1 uppercase, 1 number, and 1 special character.";
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = "login.html";
      } else {
        error.textContent = data.message;
      }
    } catch (err) {
      error.textContent = "Something went wrong. Try again!";
    }
  });
  