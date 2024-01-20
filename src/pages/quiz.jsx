import { useLoaderData, useOutletContext } from 'react-router-dom'
import quizzes from '../data.json'
import { useContext, useEffect, useState } from 'react'
import Results from './results.jsx'

export const loader = ({ params }) => {
  const { quizId } = params
  return quizzes.find(q => q.id === Number(quizId))
}

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [quiz, setQuiz] = useOutletContext()
  const loaderData = useLoaderData()

  useEffect(() => {
    setQuiz(loaderData)
  }, [setQuiz, loaderData])

  if (null === quiz) return

  const { questions } = quiz

  if (questionIndex === questions.length) {
    return <Results quiz={quiz} score={score} />
  }

  const question = questions[questionIndex]

  const correctAnswerIndex = question.options.findIndex(option => question.answer === option)
  const realIndex = questionIndex + 1;
  const completionPercentage = (realIndex / questions.length) * 100

  const submitAnswer = e => {
    if (isSubmitted || chosenAnswerIndex === undefined) return
    setIsSubmitted(true)

    if (chosenAnswerIndex === correctAnswerIndex) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setQuestionIndex(questionIndex + 1)
      setChosenAnswerIndex(undefined)
      setIsSubmitted(false)
    }, 2000)
    e.preventDefault()
  }

  const selectOption = i => e => {
    e.preventDefault()
    setChosenAnswerIndex(i)
  }


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