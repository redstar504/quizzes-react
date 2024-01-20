export function isDarkModeOperatingSystem() {
  const localStorageMode = JSON.parse(localStorage.getItem('darkModeEnabled'))
  if (localStorageMode !== null) {
    return localStorageMode
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}