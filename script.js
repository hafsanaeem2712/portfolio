document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');

  // Toggle mobile navigation drawer
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close drawer when any menu item is clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});