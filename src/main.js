const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});