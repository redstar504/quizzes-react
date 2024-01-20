import { useLoaderData } from 'react-router-dom'
import quizzes from '../data.json'
import { useState } from 'react'

export const loader = ({ params }) => {
  const { quizId } = params
  return quizzes.find(q => q.id === Number(quizId))
}

const Quiz = () => {
  const [qIndex, setQIndex] = useState(0)
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const quiz = useLoaderData()
  const { questions } = quiz
  const question = questions[qIndex]
  const correctAnswerIndex = question.options.findIndex(option => question.answer === option)

  const submitAnswer = e => {
    if (isSubmitted) return
    setIsSubmitted(true)

    setTimeout(() => {
      setQIndex(qIndex + 1)
      setChosenAnswerIndex(undefined)
      setIsSubmitted(false)
    }, 2000)
    e.preventDefault()
  }

  const selectOption = i => e => {
    e.preventDefault()
    setChosenAnswerIndex(i)
  }

  const realIndex = qIndex + 1;
  console.log(realIndex)
  const completionPercentage = (realIndex / questions.length) * 100
  console.log(completionPercentage)

  const classListForOption = i => {
    const classList = []
    if (chosenAnswerIndex === i) {
      classList.push('selected')
    }

    if (isSubmitted && i === correctAnswerIndex) {
      classList.push('correct')
    }

    if (isSubmitted && i === chosenAnswerIndex && i !== correctAnswerIndex) {
      classList.push('incorrect')
    }

    return classList.join(' ')
  }

  return (
    <>
      <div id="intro">
        <i>Question {realIndex} of {questions.length}</i>

        <h2>
          {question.question}
        </h2>

        <div id="progressWrapper">
          <div id="progressBar" style={{width: completionPercentage + '%'}}></div>
        </div>
      </div>

      <ol id="selectionList" className="questions">
        {question.options.map((option, i) => (
          <li
            key={i}
            className={classListForOption(i)}
          >
            <a className="card" href="#" onClick={selectOption(i)}>
              {option}
            </a>
          </li>
        ))}
      </ol>

      <button onClick={submitAnswer}>Submit Answer</button>
    </>
  )
}

export default Quiz