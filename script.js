function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks! Your message has been sent.";
});







const roles = [
  "Tech-Savvy Creator",
  "Azure DevOps Engineer",
  "Music Producer",
  "Civil Engineer",
  "Founder of Dream Ladders"
];

const typingElement = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // typing delay in ms

function typeEffect() {
  const currentRole = roles[roleIndex];
  const visibleText = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  typingElement.textContent = visibleText;

  if (!isDeleting && charIndex === currentRole.length) {
    // Pause at the end of the word
    setTimeout(() => (isDeleting = true), 1500);
  } else if (isDeleting && charIndex === 0) {
    // Move to the next role
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const delay = isDeleting ? 60 : typingSpeed;
  setTimeout(typeEffect, delay);
}

// Start the effect
typeEffect();
