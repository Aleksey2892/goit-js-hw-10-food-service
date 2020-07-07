export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const refs = {
  switcher: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

// ADD LISTENER
refs.switcher.addEventListener('change', themeSwitchHandler);

// SWITCH HANDLER FN
function themeSwitchHandler() {
  const checkedOn = refs.switcher.checked;

  checkedOn
    ? themeChange(Theme.LIGHT, Theme.DARK)
    : themeChange(Theme.DARK, Theme.LIGHT); //eslint-disable-line
}

// SWITCH FN
export function themeChange(replaceTheme, turnTheme) {
  // ckeck contents class
  const checkClassTheme = refs.body.classList.contains(replaceTheme);

  const replaceClass = () =>
    refs.body.classList.replace(replaceTheme, turnTheme);
  // or
  const addClass = () => refs.body.classList.add(turnTheme);

  checkClassTheme ? replaceClass() : addClass(); //eslint-disable-line
  localStorage.setItem('theme', turnTheme);
}
