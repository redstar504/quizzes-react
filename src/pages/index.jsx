import { useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'
import QuizIcon from '../components/QuizIcon.jsx'
import { getTopics } from '../lib/API.js'
import { GridLoader } from 'react-spinners'
import { createPortal } from 'react-dom'
import QuizGenerator from '../components/QuizGenerator.jsx'

const Index = () => {
  const [, setQuizHeader] = useOutletContext()
  const navigate = useNavigate()
  const [topics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)


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

  const handleClose = () => setIsGenerating(false)

  return (
    <>
      {isGenerating && createPortal(<QuizGenerator onClose={handleClose} />, document.getElementById('root'))}

      <section id="intro">
        <h1>
          Welcome to the <strong>AI Quiz Builder!</strong>
        </h1>

        <i>Click the button to get started. </i>
      </section>

      {isLoading && (
        <div id="loadingWrapper">
          <GridLoader size={32} />
        </div>
      ) || (
        <>
          {topics.length > 0 && (
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
          <button className="button" onClick={() => setIsGenerating(true)}>Generate Quiz</button>
        </>
      )}
    </>
  )
}

export default Index