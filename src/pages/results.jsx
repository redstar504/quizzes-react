import { useNavigate } from 'react-router-dom'
import QuizIcon from '../components/QuizIcon.jsx'

const Results = ({quiz, score}) => {
  const navigate = useNavigate()


  return (
    <>
      <section id="intro">
        <h1>
          Quiz Completed
          <strong>You scored...</strong>
        </h1>
      </section>

      <section className="card" id="resultsCard">
        <h3>
          <QuizIcon quiz={quiz} />
          {quiz.title}
        </h3>
        <strong>{score}</strong>
        <p>out of 10</p>
      </section>

      <button className="button" onClick={() => navigate('/')}>Play Again</button>
    </>
  )
}

export default Results