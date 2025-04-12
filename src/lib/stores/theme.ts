import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark' | 'system';

// Get the initial theme from localStorage or default to system
const getInitialTheme = (): Theme => {
  if (!browser) return 'system';

  const storedTheme = localStorage.getItem('theme') as Theme;
  if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
    return storedTheme;
  }

  return 'system';
};

// Create the theme store
export const theme = writable<Theme>(getInitialTheme());

// Function to apply the theme to the document
export const applyTheme = (newTheme: Theme) => {
  if (!browser) return;

  // Save the theme preference
  localStorage.setItem('theme', newTheme);

  // If system theme, detect from user's system preference
  if (newTheme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  } else {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }
};

// Initialize theme on client side
if (browser) {
  // Subscribe to theme changes
  theme.subscribe(applyTheme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    theme.subscribe(currentTheme => {
      if (currentTheme === 'system') {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    });
  });
}
