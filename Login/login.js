<<<<<<< HEAD
const form = document.getElementById("login-form");
const msg = document.getElementById("login-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Get user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("kaokn-user"));

  if (storedUser && email === storedUser.email && password === storedUser.password) {
    msg.textContent = "✅ Login successful!";
    msg.style.color = "green";

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    msg.textContent = "❌ Invalid email or password.";
    msg.style.color = "red";
  }
=======
const form = document.getElementById("login-form");
const msg = document.getElementById("login-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Get user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("kaokn-user"));

  if (storedUser && email === storedUser.email && password === storedUser.password) {
    msg.textContent = "✅ Login successful!";
    msg.style.color = "green";

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    msg.textContent = "❌ Invalid email or password.";
    msg.style.color = "red";
  }
>>>>>>> 2edfa43 (intial commit)
});