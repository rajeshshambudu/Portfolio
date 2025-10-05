function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks! Your message has been sent.";
});
