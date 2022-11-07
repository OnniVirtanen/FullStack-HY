import { useState } from 'react'

const Button = ({text, setValue, value}) => {
  return (
    <>
      <button onClick={() => ChooseSet({setValue, value})}>
        {text}
      </button>
    </>
  )
}

const ValueOfAll = ({text, good,neutral,bad}) => {
  const sumAll = () => {
    return good + neutral + bad
  }
  return (
    <>
      {text} {sumAll()}
    </>
  )
}

const ChooseSet = ({setValue, value}) => {
  return (
    setValue(value + 1)
    )
}

const Display = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Average = ({good, neutral, bad, text}) => {
  const calculateAverage = () => ((good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad))
  
  return (
    <div>
      {text} {calculateAverage()}
    </div>
  )
}

const OfPositive = ({good, neutral, bad, text}) => {
  const calculateOfPositive = () => (good / (good + neutral + bad)) 

  return (
    <div>
      {text} {calculateOfPositive()} %
    </div>
  )
}

const Header = ({text}) => <h1>{text}</h1>

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <ValueOfAll text="all" good={good} neutral={neutral} bad={bad} />
      <Average text="average" good={good} neutral={neutral} bad={bad} />
      <OfPositive text="positive" good={good} neutral={neutral} bad={bad} />
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" setValue={setGood} value={good} />
      <Button text="neutral" setValue={setNeutral} value={neutral} />
      <Button text="bad" setValue={setBad} value={bad} />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App