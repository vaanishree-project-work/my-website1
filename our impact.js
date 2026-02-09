const stars = document.querySelectorAll('.star');
const submitBtn = document.getElementById('submitFeedback');
const message = document.getElementById('message');

let rating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    rating = Number(star.dataset.value);
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('active');
    }
  });
});

submitBtn.addEventListener('click', () => {
  if (rating === 0) {
    message.textContent = "Please select a rating ⭐";
    return;
  }

  if (rating <= 3) {
    message.textContent =
      "Thanks for your feedback 😊 We’ll improve and do even better next time!";
  } else {
    message.textContent =
      "Thank you for your positive feedback ❤️ We’re glad you liked it!";
  }

  rating = 0;
  stars.forEach(s => s.classList.remove('active'));
  document.getElementById('feedbackInput').value = '';
});