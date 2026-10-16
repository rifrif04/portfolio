// Theme Switcher (Dark / Light)
function updateThemeIcon() {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  const isDark = document.documentElement.classList.contains('dark');
  icon.className = isDark ? 'fa-solid fa-sun text-lg' : 'fa-solid fa-moon text-lg';
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  updateThemeIcon();
}

function toggleTheme() {
  applyTheme(!document.documentElement.classList.contains('dark'));
}