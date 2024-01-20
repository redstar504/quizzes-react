import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import quizzes from '../data.json'
import { useEffect } from 'react'
import QuizIcon from '../components/QuizIcon.jsx'

const Index = () => {
  const [, setQuizHeader] = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    setQuizHeader(null)
  }, [setQuizHeader])

  return (
    <>
      <section id="intro">
        <h1>
          Welcome to the <strong>Frontend Quiz!</strong>
        </h1>

        <i>Pick a subject to get started. </i>
      </section>

      <ul id="selectionList">
        {quizzes.map((q, i) => (
          <li key={i}>
            <button onClick={() => navigate(`quiz/${q.id}`)} className="card">
              <QuizIcon quiz={q} />
              {q.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Index