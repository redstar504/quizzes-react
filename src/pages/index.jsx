import { useNavigate, useOutletContext } from 'react-router-dom'
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

      {/*<ul id="selectionList">
        <li>
          <Link to={`quiz/1`} className="card">
            <span className="icon icon-html"></span>
            HTML
          </Link>
        </li>
        <li>
          <Link to={`quiz/2`} className="card">
            <span className="icon icon-css"></span>
            CSS
          </Link>
        </li>
        <li>
          <Link to={`quiz/3`} className="card">
            <span className="icon icon-js"></span>
            JavaScript
          </Link>
        </li>
        <li>
          <Link to={`quiz/4`} className="card">
            <span className="icon icon-a11y"></span>
            Accessibility
          </Link>
        </li>
      </ul>*/}
    </>
  )
}

export default Index