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

function type() {
  const current = roles[roleIndex];
  const partial = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  typingElement.textContent = partial;

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => (isDeleting = true), 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(type, speed);
}

type();

