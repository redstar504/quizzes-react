const QuizIcon = ({quiz}) => {
  return (
    <span
      className="icon"
      style={{
        backgroundImage: `url(${quiz.icon})`,
        backgroundColor: quiz.color,
      }}
    ></span>
  )
}

export default QuizIcon