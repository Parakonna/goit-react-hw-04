import css from './Feedback.module.css'

const Feedback = ({count,totalFeedback, positiveFeedback}) => {
  return (
    <div >
      <ul >
        <li className={css.feedback}>Good: {count.good}</li>
        <li className={css.feedback}>Neutral: {count.neutral}</li>
        <li className={css.feedback}>Bad: {count.bad}</li>
        <li className={css.feedback}>Total: {totalFeedback}</li>
        <li className={css.feedback}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  )
}

export default Feedback