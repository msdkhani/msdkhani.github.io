(() => {
  'use strict';
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const controls = document.querySelector('.cosmic-controls');
  const toggle = document.getElementById('motion-toggle');
  let paused = preference.matches;
  try { paused ||= sessionStorage.getItem('cosmic-paused') === 'true'; } catch (_) {}
  function sync() {
    document.documentElement.classList.toggle('motion-paused', paused);
    toggle.textContent = paused ? 'Play motion' : 'Pause motion';
    toggle.setAttribute('aria-pressed', String(paused));
    window.dispatchEvent(new CustomEvent('cosmic-motion', {detail: paused}));
  }
  toggle.addEventListener('click', () => {
    paused = !paused;
    try { sessionStorage.setItem('cosmic-paused', String(paused)); } catch (_) {}
    sync();
  });
  preference.addEventListener('change', e => { paused = e.matches; sync(); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    }), { threshold:.1 });
    document.querySelectorAll('.teaching-section, .teaching-topic, .teaching-practice-grid article, .publication-entry, .section-intro, .section-heading, .about-copy, .research-row, .update, .project-card, .cv-card, .contact-section .wrap').forEach(el => { el.classList.add('motion-reveal'); observer.observe(el); });
  }
  document.querySelectorAll('.hero-actions a').forEach(button => {
    button.addEventListener('pointermove', e => {
      if (paused || e.pointerType !== 'mouse') return;
      const box = button.getBoundingClientRect();
      button.style.setProperty('--magnet-x', `${(e.clientX-box.left-box.width/2)*.07}px`);
      button.style.setProperty('--magnet-y', `${(e.clientY-box.top-box.height/2)*.12}px`);
    });
    button.addEventListener('pointerleave', () => {
      button.style.setProperty('--magnet-x', '0px');button.style.setProperty('--magnet-y', '0px');
    });
  });
  controls.hidden = false;
  sync();
})();
