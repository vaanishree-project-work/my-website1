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
    const username = document.getElementById("username").value.trim();
 
    if (email === "" && password === "" && username === "") {
    alert("Please enter Email, Password, and Username");
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
  if (username === "") {
    alert("Please enter Username");
    return;
  }

  // ✅ Success
  window.location.href = "start.html";
});