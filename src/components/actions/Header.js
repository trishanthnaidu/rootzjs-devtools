// on Menu Open
export const onMenuOpen = () => ({ isMenuOpen: true });

// on Theme Change
export const onThemeChange = evt => ({ theme: evt.target.checked ? "dark" : "light" });

