import React, { useState } from 'react'

const Anecdote = (props) => {
  return(
    <p>"{props.anecdotes[props.selected]}"</p>
    )
}
//
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
//
const Count = (props) => {
  return(
    <p>{props.votes[props.selected]} votes </p>
  )

}
//
const Topvotes = (props) => {
    var top = props.votes.indexOf(Math.max(...props.votes))
    var topPointsAnecdote = props.anecdotes[top]

    return(
  <p>"{topPointsAnecdote}"</p>)

}

const Highestvotes = (props) => {
  var highestVotes = props.votes[props.votes.indexOf(Math.max(...props.votes))]
  return(
  <p>has {highestVotes} votes</p>
  )
}


//
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]


  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(7).fill(0)) 

  const Addvote = () => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}

  
    return (
    <div>
      <h1>Anecdote of the day:</h1>
      <Anecdote selected={selected} anecdotes={anecdotes}  />
      <Count votes={votes} selected={selected} anecdotes={anecdotes}/>
      <Button handleClick={Addvote} text="Vote!" votes={votes} setVotes={setVotes}  />  
      <Button handleClick={() => setSelected(Math.floor(Math.random() * (Math.floor(6) + 1)))} text="Next Anecdote" />
      <h1>Anecdote with most votes:</h1>
      <Topvotes anecdotes={anecdotes} votes={votes} />
      <Highestvotes votes={votes} />
    </div>
  )

}

export default App