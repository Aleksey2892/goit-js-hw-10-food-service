const themeSwitchRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');
// console.dir(themeSwitchRef);

themeSwitchRef.addEventListener('change', themeSwitch);

function themeSwitch() {
  const themeOn = themeSwitchRef.checked;

  if (themeOn) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
  }
  if (!themeOn) {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
  }
}
