import { Outlet } from 'react-router-dom'
import '../styles/screen.css'
import '../styles/themeToggle.css'
import DarkModeControl from '../components/DarkModeControl.jsx'
import useColorMode from '../hooks/useColorMode.js'
import { createContext, useState } from 'react'
import QuizIcon from '../components/QuizIcon.jsx'

export const ActiveQuizContext = createContext()

const Root = () => {
  const { toggleDarkMode } = useColorMode()
  const [quiz, setQuiz] = useState(null)

  return (
    <main>
      <header>
        {quiz && (
          <>
            <QuizIcon quiz={quiz} />
            <h1 id="heading">{quiz.title}</h1>
          </>
        )}
        <aside>
          <DarkModeControl onToggleMode={() => toggleDarkMode()}/>
        </aside>
      </header>
        <Outlet context={[quiz, setQuiz]} />
    </main>
  )
}

export default Root