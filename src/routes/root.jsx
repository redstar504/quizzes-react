import { Outlet } from 'react-router-dom'
import '../styles/screen.css'
import '../styles/themeToggle.css'
import DarkModeControl from '../components/DarkModeControl.jsx'
import useColorMode from '../hooks/useColorMode.js'

const Root = () => {
  const { toggleDarkMode } = useColorMode()

  return (
    <main>
      <header>
        <aside>
          <DarkModeControl onToggleMode={() => toggleDarkMode()}/>
        </aside>
      </header>
      <Outlet />
    </main>
  )
}

export default Root