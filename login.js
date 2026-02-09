// 👁️ Toggle Password
function togglePassword() {
  const password = document.getElementById("password");
  const eye = document.querySelector(".eye");

  if (password.type === "password") {
    password.type = "text";
    eye.textContent = "🙈";
  } else {
    password.type = "password";
    eye.textContent = "👁️";
  }
}

// 🔐 Validation
document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();


  if (email === "" && password === "") {
    alert("Please enter Email and Password");
    return;
  }

  if (email === "") {
    alert("Please enter Email");
    return;
  }

  if (password === "") {
    alert("Please enter Password");
    return;
  }
  

  // ✅ Success
  window.location.href = "start.html";
});