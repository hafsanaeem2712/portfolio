document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer navigation toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Handle Contact Form Submission via Mailto
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const subject = document.getElementById('userSubject').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      const mailtoLink = `mailto:hafsanaeem2712@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoLink;
    });
  }
});