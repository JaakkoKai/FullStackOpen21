import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  console.log(props)
  if (props.good === 0 && props.bad === 0 && props.neutral === 0){
    return(
    <p>No Feedback given</p>
    )
  }

  return(
  <table>
  <StatisticLine text="good" value={props.good} />
  <StatisticLine text="neutral" value={props.neutral} />
  <StatisticLine text="bad" value={props.bad} />
  <StatisticLine text="total" value={props} />
  <StatisticLine text="average" value={props} />
  <StatisticLine text="positive" value={props} />
  </table>
  )
}

const StatisticLine = (props) => {
  if (props.text==="total") {
    return(
      <Total good={props.value.good} neutral={props.value.neutral} bad={props.value.bad} />
    )
  }
  if (props.text==="average") {
    return (
       <Average good={props.value.good} neutral={props.value.neutral} bad={props.value.bad} />
    )
  }
  if (props.text==="positive") {
    return(
      <Positive good={props.value.good} neutral={props.value.neutral} bad={props.value.bad} />
    )
  }
    return(
    <Count text={props.text} value={props.value} />
  )

}


const Total = (props) => {
  return(
  <tbody>
    <tr>
    <td> Total </td>
    <td> {props.good + props.neutral + props.bad} </td>
    </tr>
  </tbody>
    )
}

const Count = (props) => ( <tbody><tr><td>{props.text}</td><td>{props.value}</td></tr></tbody> )

const Average = (props) => {
  return(
  <tbody>
  <tr>
  <td> Average </td>
  <td> {(props.good - props.bad)/(props.good + props.bad + props.neutral)} </td>
  </tr>
  </tbody>
  )
}

const Positive = (props) => {
  return(
  <tbody>
    <tr>
    <td> Positive </td>
    <td> {(props.good)/(props.good+props.bad+props.neutral)*100} % </td>
    </tr>
  </tbody>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
    <div>
      <h1>
      <b>Give Feedback</b>
      </h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>
      <b>Statistics</b>
      </h1>
      <Statistics good={good} bad={bad} neutral={neutral} />  
    </div>
  )
}

export default App