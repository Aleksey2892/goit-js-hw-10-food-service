import { Theme, refs, themeChange } from './themeSwitch';

// APPLY THEME ON PAGE LOAD FROM STORAGE
const applyTheme = (replaceTheme, turnTheme) => {
  themeChange(replaceTheme, turnTheme);
  localStorage.clear();
};

try {
  const preloadTheme = localStorage.getItem('theme') === Theme.DARK;

  if (preloadTheme) {
    refs.switcher.checked = true;
    applyTheme(Theme.LIGHT, Theme.DARK);
  } else {
    applyTheme(Theme.DARK, Theme.LIGHT);
  }
} catch (err) {
  console.error('Set state error: ', err);
}
