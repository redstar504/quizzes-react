import { useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'
import QuizIcon from '../components/QuizIcon.jsx'
import { getTopics } from '../lib/API.js'
import { GridLoader } from 'react-spinners'

const Index = () => {
  const [, setQuizHeader] = useOutletContext()
  const navigate = useNavigate()
  const [topics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    getTopics().then(json => {
      setTopics(json)
      setIsLoading(false)
    })
  }, [])

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

      {isLoading && (
        <div id="loadingWrapper">
          <GridLoader size={32} />
        </div>
      ) || (
        <ul id="selectionList">
          {topics.map((t, i) => (
            <li key={i}>
              <button onClick={() => navigate(`quiz/${t.id}`)} className="card">
                <QuizIcon quiz={t} />
                {t.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Index