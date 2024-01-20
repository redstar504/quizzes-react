const DarkModeControl = ({onToggleMode}) => {
  return (
    <div id="themeToggleWrapper" onClick={onToggleMode}>
      <span></span>
      <b id="modeControl"><b></b></b>
      <span></span>
    </div>
  )
}

export default DarkModeControl