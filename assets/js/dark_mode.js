document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('light-toggle');
  if (!button) return;
  button.setAttribute('aria-label', 'Switch color theme');
  button.addEventListener('click', () => toggleTheme(document.documentElement.getAttribute('data-theme')));
});
