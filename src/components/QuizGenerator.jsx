import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GridLoader } from 'react-spinners'

const QuizGenerator = ({onClose = f => f}) => {
  const [generatorTopic, setGeneratorTopic] = useState('')
  const [statKey, setStatKey] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const API_HOST = import.meta.env.VITE_API_HOST

  useEffect(() => {
    if (null === statKey) return

    const interval = setInterval(() => {
      fetch(`${API_HOST}/poll/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ statkey: statKey })
      }).then(resp => resp.json())
        .then(json => {
          const result = json.topic
          console.log('polling result', result)
          if (Number.isInteger(result)) {
            navigate(`quiz/${result}`)
          }
        })
    }, 3000)

    return () => clearInterval(interval)
  }, [API_HOST, statKey])
  const handleGenerate = e => {
    e.preventDefault()

    if (generatorTopic === '') return

    fetch(`${API_HOST}/generate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({topic: generatorTopic}),
    }).then(resp => resp.json())
      .then(json => {
        console.log('generator json received', json)
        setIsLoading(true)
        setStatKey(json.statkey)
      })
  }

  return (
    <div id="modalContainer" onClick={onClose}>
      <div id="modalContent" onClick={e => e.stopPropagation()}>
        {isLoading && (
          <>
            <h2>Generating Your Quiz</h2>
            <div id="generatorLoadingWrapper">
              <GridLoader color="#36d7b7" size={48} />
            </div>
          </>
        ) || (
          <>
            <h2>Generate a Quiz</h2>
            <form id="generatorForm" onSubmit={e => handleGenerate(e)}>
              <div className="fieldWrapper">
                <label htmlFor="generatorTopicTxt">Test my knowledge on...</label>
                <input id="generatorTopicTxt" className="textInput" value={generatorTopic}
                       onChange={e => setGeneratorTopic(e.target.value)} />
              </div>
              <button className="button" type="submit">Generate</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default QuizGenerator