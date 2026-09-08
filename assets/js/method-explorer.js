(() => {
  document.querySelectorAll('.method-explorer').forEach(explorer => {
    const buttons = [...explorer.querySelectorAll('.stage-select')];
    buttons.forEach(button => button.addEventListener('click', () => {
      const selected = button.dataset.stage;
      buttons.forEach(item => { const active=item===button;item.setAttribute('aria-pressed',String(active));item.closest('.method-step').classList.toggle('is-active',active); });
      explorer.querySelectorAll('.pipeline-stage').forEach(stage => stage.classList.toggle('is-active',stage.dataset.stage===selected));
      explorer.classList.add('has-selection');
    }));
  });
})();
