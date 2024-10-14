import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification"
import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState( () => {
        const val = localStorage.getItem("countValue");
        const parsedVal = JSON.parse(val) ?? {
      good: 0,
      neutral: 0,
      bad: 0
    };
        return parsedVal;
  });

  useEffect(() => {}, [])
  useEffect(() => {
    const stringifiedValue = JSON.stringify(count);
    localStorage.setItem("countValue", stringifiedValue)
  }, [count]);

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }; 

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

 return (
<>
     <Description />
     <Options updateFeedback={updateFeedback}
       resetFeedback={resetFeedback}
       totalFeedback={totalFeedback} />
     {totalFeedback === 0 && <Notification />}
     {totalFeedback > 0 && <Feedback count={count}
       totalFeedback={totalFeedback}
       positiveFeedback={positiveFeedback}
     />}
</>
);
};

export default App