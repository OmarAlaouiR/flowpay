const form = document.getElementById("signup-form");
const message = document.getElementById("success-msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Grab values from inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const country = document.getElementById("country").value;

    // Basic validation
    if (name && email && password && country) {
      // Save to localStorage just for MVP/testing
      const userData = {
        name,
        email,
        password,
        country,
      };

      localStorage.setItem("kaokn-user", JSON.stringify(userData));

      // Show success message
      message.textContent = "✅ Account created!";
      message.style.color = "green";

      // Optionally clear form
      form.reset();
    } else {
      message.textContent = "❌ Please fill in all fields.";
      message.style.color = "red";
    }
  });
} else {
  console.error("Signup form not found!");
}

