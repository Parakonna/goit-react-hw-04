import css from './Options.module.css'

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  
  return (
    <div className={css.option}>
      <button className={css.optionBtn} onClick={() => updateFeedback("good")}>Good</button>
      <button className={css.optionBtn}  onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.optionBtn} onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button className={css.optionBtn} onClick={resetFeedback} type="button">Reset</button>}
    </div>
  )
}

export default Options