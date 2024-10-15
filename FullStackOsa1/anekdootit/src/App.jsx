import { useState } from 'react'
import { anecdotes } from './anecdotes'

const App = () => {   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <>
    <header>
      <h2>Anecdote of the day</h2>
    </header>

    <main>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>
        vote
      </button>
      <button onClick={handleNext}>
        next anecdote
      </button>
    </main>

      <header>
        <h2>Anecdote with the most votes</h2>
      </header>

      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
    </>

  )
}

export default App
