

const Adder = (course) => { 
let total = 0 
course.parts.map(part => total += part.exercises)
return (total)
}

export default Adder