import { useNavigate } from 'react-router-dom'

const Results = () => {
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
          <span className="icon icon-a11y"></span>
          Accessibility
        </h3>
        <strong>8</strong>
        <p>out of 10</p>
      </section>

      <button onClick={() => navigate('/')}>Play Again</button>
    </>
  )
}

export default Results