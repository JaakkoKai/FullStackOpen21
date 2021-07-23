import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
    <p>
    {props.course.name}
    </p>
    </div>
    )
}

const Content = (props) => {
  return(
    <div>
     <Part part={props.parts[0]} />
     <Part part={props.parts[1]} />
     <Part part={props.parts[2]} />
    </div>
    )
}

const Part = (props) => {
  return(
  <div>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  </div>
      )
}

const Total = (props) => {
  return(
    <div>
    <p>
    {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
    </div>
    )
}

export default App