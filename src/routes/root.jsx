import { Outlet } from 'react-router-dom'
import '../styles/screen.css'
import '../styles/themeToggle.css'

const Root = () => {
  return (
    <main>
      <header>
        <aside>
          <label id="themeToggleWrapper" htmlFor="themeMode">
            <span></span>
            <b id="modeControl"><b></b></b>
            <span></span>
          </label>
        </aside>
      </header>
      <Outlet />
    </main>
  )
}

export default Root