const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('.tab-panel');

function activateTab(tabName) {
  tabs.forEach((tab) => {
    const isSelected = tab.dataset.tab === tabName;
    tab.classList.toggle('is-active', isSelected);
    tab.setAttribute('aria-selected', String(isSelected));
  });

  panels.forEach((panel) => {
    const isSelected = panel.id === tabName;
    panel.classList.toggle('is-active', isSelected);
    panel.hidden = !isSelected;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
});

document.querySelector('.request-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector('button[type="submit"]');
  submitButton.textContent = 'Request submitted';
  submitButton.disabled = true;
});
