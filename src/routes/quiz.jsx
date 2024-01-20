import { useLoaderData } from 'react-router-dom'

export const loader = ({ params }) => params

const Quiz = () => {
  const quiz = useLoaderData()

  return (
    <>
      <div id="intro">
        <i>Question 6 of 10</i>

        <h2>
          Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?
        </h2>

        <div id="progressWrapper">
          <div id="progressBar" style={{width: '40%'}}></div>
        </div>
      </div>

      <ol id="selectionList" className="questions">
        <li>
          <a className="card" href="#">
            4.5 : 1
          </a>
        </li>
        <li>
          <a className="card" href="#">
            3 : 1
          </a>
        </li>
        <li>
          <a className="card" href="#">
            2.5 : 1
          </a>
        </li>
        <li>
          <a className="card" href="#">
            5 : 1
          </a>
        </li>
      </ol>

      <button>Submit Answer</button>
    </>
  )
}

export default Quiz