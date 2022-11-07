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

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const totalOfReviews = () => good + neutral + bad 
  const reviewPoints = () => good * 1 + neutral * 0 + bad * -1

  const averageReview = () =>  reviewPoints() / totalOfReviews()

  const positiveReviews = () => {
    return (
      good / totalOfReviews() * 100 + " %"
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
      <Display text={"all"} amount={totalOfReviews()}/>
      <Display text={"average"} amount={averageReview()} />
      <Display text={"positive"} amount={positiveReviews()} />
    </div>
  )
}

export default App