"use strict";

// ===============================
// Accessing/Using - Settings Elements
// ===============================
const themeToggleBtn = document.getElementById("themeToggleBtn");
const rememberThemeToggle = document.getElementById("rememberThemeToggle");
const animationsToggle = document.getElementById("animationsToggle");
const clearSavedBreedsBtn = document.getElementById("clearSavedBreedsBtn");
const resetPreferencesBtn = document.getElementById("resetPreferencesBtn");

// ===============================
// Local Storage Keys
// ===============================
const STORAGE_KEYS = {
  theme: "catconnect-theme",
  rememberTheme: "catconnect-remember-theme",
  animations: "catconnect-animations",
  savedBreeds: "catconnect-saved-breeds",
};

// ===============================
// Apply Theme
// ===============================
function applyTheme(theme) {
  document.body.dataset.theme = theme;

  updateThemeIcon(theme);
}

// ===============================
// Load Settings
// ===============================
function loadSettings() {
  const rememberTheme = JSON.parse(localStorage.getItem(STORAGE_KEYS.rememberTheme)) ?? true;
  const savedTheme = rememberTheme ? (localStorage.getItem(STORAGE_KEYS.theme) ?? "light") : "light";
  const animationsEnabled = JSON.parse(localStorage.getItem(STORAGE_KEYS.animations)) ?? true;

  applyTheme(savedTheme);

  if (rememberThemeToggle) {
    rememberThemeToggle.checked = rememberTheme;
  }

  if (animationsToggle) {
    animationsToggle.checked = animationsEnabled;
    document.body.dataset.animations = animationsEnabled ? "on" : "off";
  }
}

// ===============================
// Toggle Theme
// ===============================
function toggleTheme() {
  const currentTheme = document.body.dataset.theme ?? "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  const rememberTheme = rememberThemeToggle ? rememberThemeToggle.checked : true;

  if (rememberTheme) {
    localStorage.setItem(STORAGE_KEYS.theme, newTheme);
  } else {
    localStorage.removeItem(STORAGE_KEYS.theme);
  }

  applyTheme(newTheme);
}

// ===============================
// Update Theme Icon
// ===============================
function updateThemeIcon(theme) {
  if (!themeToggleBtn) {
    return;
  }

  const themeIcon = themeToggleBtn.querySelector("i");

  if (!themeIcon) {
    return;
  }

  if (theme === "dark") {
    themeIcon.className = "bi bi-moon-fill";
    themeToggleBtn.setAttribute("aria-label", "Switch to light mode");
  } else {
    themeIcon.className = "bi bi-sun-fill";
    themeToggleBtn.setAttribute("aria-label", "Switch to dark mode");
  }
}

// ===============================
// Save Remember Theme Preference
// ===============================
function saveRememberThemePreference() {
  if (!rememberThemeToggle) {
    return;
  }

  localStorage.setItem(STORAGE_KEYS.rememberTheme, JSON.stringify(rememberThemeToggle.checked));

  if (!rememberThemeToggle.checked) {
    localStorage.removeItem(STORAGE_KEYS.theme);
  } else {
    localStorage.setItem(STORAGE_KEYS.theme, document.body.dataset.theme ?? "light");
  }
}

// ===============================
// Save Animations Preference
// ===============================
function saveAnimationsPreference() {
  if (!animationsToggle) {
    return;
  }

  const animationsEnabled = animationsToggle.checked;

  localStorage.setItem(STORAGE_KEYS.animations, JSON.stringify(animationsEnabled));
  document.body.dataset.animations = animationsEnabled ? "on" : "off";
}

// ===============================
// Clear Saved Breeds
// ===============================
function clearSavedBreeds() {
  localStorage.removeItem(STORAGE_KEYS.savedBreeds);
  alert("Saved breeds have been cleared.");
}

// ===============================
// Reset Preferences
// ===============================
function resetPreferences() {
  localStorage.setItem(STORAGE_KEYS.theme, "light");
  localStorage.setItem(STORAGE_KEYS.rememberTheme, JSON.stringify(true));
  localStorage.setItem(STORAGE_KEYS.animations, JSON.stringify(true));

  loadSettings();

  alert("Preferences have been reset.");
}

// ===============================
// Event Listeners
// ===============================
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}

if (rememberThemeToggle) {
  rememberThemeToggle.addEventListener("change", saveRememberThemePreference);
}

if (animationsToggle) {
  animationsToggle.addEventListener("change", saveAnimationsPreference);
}

if (clearSavedBreedsBtn) {
  clearSavedBreedsBtn.addEventListener("click", clearSavedBreeds);
}

if (resetPreferencesBtn) {
  resetPreferencesBtn.addEventListener("click", resetPreferences);
}

// Load settings on every page
loadSettings();
