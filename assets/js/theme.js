let toggleTheme = theme => setTheme(theme === 'dark' ? 'light' : 'dark');
let setHighlight = theme => {
  const light = document.getElementById('highlight_theme_light');
  const dark = document.getElementById('highlight_theme_dark');
  if (light) light.media = theme === 'dark' ? 'none' : '';
  if (dark) dark.media = theme === 'dark' ? '' : 'none';
};
let setGiscusTheme = theme => {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (iframe) iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
};
let transTheme = () => {};
let setTheme = theme => {
  theme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  setHighlight(theme); setGiscusTheme(theme);
  try { localStorage.setItem('theme', theme); } catch (_) { /* Storage is optional. */ }
  if (typeof medium_zoom !== 'undefined') medium_zoom.update({ background: getComputedStyle(document.documentElement).getPropertyValue('--global-bg-color').trim() });
};
let initTheme = theme => setTheme(theme === 'light' || theme === 'dark' ? theme : 'dark');
let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Use the default theme. */ }
initTheme(savedTheme);
