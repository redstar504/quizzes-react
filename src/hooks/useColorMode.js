import { useEffect, useReducer } from 'react'
import { isDarkModeOperatingSystem } from '../lib/darkMode.js'

const useColorMode = () => {
  const [useDarkMode, toggleDarkMode] = useReducer(enabled => !enabled, isDarkModeOperatingSystem())

  useEffect(() => {
    if (useDarkMode) {
      localStorage.setItem('darkModeEnabled', true)
      document.body.id = 'darkModeEnabled'
    } else {
      localStorage.setItem('darkModeEnabled', false)
      document.body.id = ''
    }
  }, [useDarkMode])

  return { toggleDarkMode }
}

export default useColorMode