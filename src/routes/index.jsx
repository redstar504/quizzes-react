import { Link, useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  return (
    <>
      <section id="intro">
        <h1>
          Welcome to the <strong>Frontend Quiz!</strong>
        </h1>

        <i>Pick a subject to get started. </i>
      </section>

      <ul id="selectionList">
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
        <li>
          <Link to={`quiz/5`} className="card">
            <span className="icon"></span>
            Canadian Geography
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Index