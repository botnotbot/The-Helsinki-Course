import React from 'react'
import Adder from './Adder'


const Course = (props) => {
	const {course} = props
	console.log(props)
	return(
		<div> 
		<h1> {course.name} </h1> 
		<ul> 
			{course.parts.map(part => {
					console.log(part.name, part.exercises, part.id)
					return(
					<li key = {part.id}>
						{part.name} {part.exercises}
					</li>
					)}
					)
			}
			<li>Total Exercises: {Adder(course)}</li> 
		</ul>
		</div>   
	) 
}

export default Course