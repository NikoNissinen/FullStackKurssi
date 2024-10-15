import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <header>
        <h2>give feedback</h2>
      </header>

      <div>
        <button onClick = {() => setGood(good + 1)}>
          good
        </button>

        <button onClick = {() => setNeutral(neutral + 1)}>
          neutral
        </button>

        <button onClick = {() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
