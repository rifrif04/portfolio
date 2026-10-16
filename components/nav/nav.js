// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close menu when clicking links
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Sinkronkan ikon toggle tema setelah navbar dimuat
if (typeof updateThemeIcon === 'function') updateThemeIcon();