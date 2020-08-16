import React from 'react';
import ReactDOM from 'react-dom';

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
  			<Header course={course}/>
  			<Content titles={course}/>
  			<Exercises titles={course}/>
    	</div>
  		)
} 


const Header = (props) => {
	return(
		<>
			<h1>{props.course["name"]}</h1>
		</>
		)
}

const Content = (props) => { 
	return(
		<>
			<p>{props.titles["parts"][0].name}, {props.titles["parts"][0].exercises} exercises</p>
			<p>{props.titles["parts"][1].name}, {props.titles["parts"][1].exercises} exercises</p>
			<p>{props.titles["parts"][2].name}, {props.titles["parts"][2].exercises} exercises</p>
		</>
		)
	}

const Exercises = (props) => {
	return(
		<>
			<p>Total Exercises: {props.titles["parts"][0].exercises + props.titles["parts"][1].exercises + props.titles["parts"][2].exercises}</p>
		</>
	)
}


ReactDOM.render(<App />, document.getElementById('root'))