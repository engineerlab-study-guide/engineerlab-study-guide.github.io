(() => {
  const inputs = [...document.querySelectorAll('#checklist input[type="checkbox"]')];
  const status = document.getElementById('check-status');
  const reset = document.getElementById('reset-checks');
  if (!inputs.length || !status || !reset) return;
  const update = () => { status.textContent = `${inputs.filter(input => input.checked).length} / ${inputs.length}개 확인`; };
  inputs.forEach(input => input.addEventListener('change', update));
  reset.hidden = false;
  reset.addEventListener('click', () => { inputs.forEach(input => { input.checked = false; }); update(); });
  update();
})();
