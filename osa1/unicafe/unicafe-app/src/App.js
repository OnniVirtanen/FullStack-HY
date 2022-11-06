import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>give feedback</h1>
  )
}

const HeaderSecond = (props) => {
  return (
    <h2>statistics</h2>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>
      {props.text} {props.amount}      
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    return (
      setGood(good + 1)
    )
  }

  const handleNeutralClick = () => {
    return (
      setNeutral(neutral + 1)
    )
  }

  const handleBadClick = () => {
    return (
      setBad(bad + 1)
    )
  }

  return (
    <div>
      <Header />
      <Button handleClick={() => handleGoodClick()} text={"good"}/>
      <Button handleClick={() => handleNeutralClick()} text={"neutral"}/>
      <Button handleClick={() => handleBadClick()} text={"bad"}/>
      <HeaderSecond />
      <Display text={"good"} amount={good} />
      <Display text={"neutral"} amount={neutral} />
      <Display text={"bad"} amount={bad} />
    </div>
  )
}

export default App