document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMsg = document.getElementById("successMsg");

  if (!name || !email || !subject || !message) {
    successMsg.style.color = "#ef4444";
    successMsg.textContent = "Please fill all fields.";
    return;
  }

  successMsg.style.color = "#22c55e";
  successMsg.textContent = "Message sent successfully! We’ll contact you soon.";

  document.getElementById("contactForm").reset();
});
