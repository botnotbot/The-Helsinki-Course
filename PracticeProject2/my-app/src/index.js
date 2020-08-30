import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Course from './components/Course'

 const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


ReactDOM.render(
  <App course={course} Course={Course}/>,
  document.getElementById('root')
)